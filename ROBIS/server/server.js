const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');
const XLSX = require('xlsx');
const path = require('path'); 
const fs = require('fs');
const cookieParser = require('cookie-parser');

// Create an Express app
const app = express();
const port = 3000;


// Configure PostgreSQL connection
const pool = new Pool({
  user: 'postgres',     // replace with your PostgreSQL username
  host: 'localhost',
  database: 'postgres', // replace with your database name
  password: 'robis@123', // replace with your PostgreSQL password
  port: 5432,
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:4200', // Allow requests from your Angular app
  credentials: true // Allow cookies to be sent
}));
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cookieParser());


//creating the new user
app.post('/createUsers', async (req, res) => {
  const { username, company, email, country, phone } = req.body;

  try {
    // // Check if the username already exists
    // const existingUser = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

    // if (existingUser.rows.length > 0) {
    //   return res.status(400).json({ message: 'Username already exists' });
    // }

    // Proceed to insert the new user
    const newUser = await pool.query(
      'INSERT INTO users (username, company, email, country, phone) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [username, company, email, country, phone]
    );

    res.status(201).json(newUser.rows[0]); // Respond with the created user
  } catch (err) {
    console.error('Error inserting data', err);
    res.status(500).json({ message: 'Server error' });
  }
});



// Function to delete a user by ID
app.delete('/createUsers', async (req, res) => {
  const userId = req.params.id; // Assuming you're getting the user ID from the request parameters

  try {
    // Delete the user and return the deleted user data
    const result = await pool.query(
      'DELETE FROM users WHERE id = $1 RETURNING *',
      [userId]
    );

    // Check if any user was deleted
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the deleted user data
    res.status(200).json({ message: 'User deleted successfully', deletedUser: result.rows[0] });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  const { username, phone } = req.body;
  try {
    // Ensure column names in the SQL query match those in your database
    const result = await pool.query('SELECT * FROM users WHERE username = $1 AND phone = $2', [username, phone]);
    
    if (result.rows.length > 0) {
      const user = result.rows[0];
    
      res.json({
        message: 'Login successful',
        user: {
          name: user.username,
          email: user.email,        
          company: user.company,
          country: user.country,
          phoneNumber: user.phone
        }
      });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Server error' });
  }
});



app.post('/userdetails', async (req, res) => {
  

  let { name, email, company, country, phoneNumber, time } = req.body;

  // Convert empty or undefined values to null for the database
  email = email && email.trim() !== '' ? email.trim() : null;
  country = country && country.trim() !== '' ? country.trim() : null;
  phoneNumber = phoneNumber && phoneNumber.trim() !== '' ? phoneNumber.trim() : null;

  try {
    // Insert user into the usersdetails table
    const result = await pool.query(
      'INSERT INTO usersdetails (name, e_mail, company, country, phone_number, time) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
      [name, email, company, country, phoneNumber, time]
    );

    const userId = result.rows[0].id; // Get the auto-generated ID
    res.status(201).json({ message: 'User details saved', id: userId }); // Return the userId
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ message: 'Error creating user', error: err.message });
  }
});




  // Route to create a vertical
    app.post('/verticles', async (req, res) => {
    const { userId, verticalName } = req.body;
    console.log("USerID", userId);
    
    try {
      // Insert vertical into the verticles table
      const result = await pool.query(
        'INSERT INTO verticles (user_id, vertical_name) VALUES ($1, $2) RETURNING id',
        [userId, verticalName]
      );
  
      const verticalId = result.rows[0].id;
      res.status(201).json({ message: 'Vertical created', verticalId });
    } catch (err) {
      console.error('Error creating vertical:', err);
      res.status(500).json({ message: 'Error creating vertical', error: err.message });
    }
  });
  
  

  app.post('/api/actions', async (req, res) => {
    const { VerticleId, Product } = req.body;
  
    try {
      const result = await pool.query(
        `INSERT INTO Actions (Verticle_id, Product) 
         VALUES ($1, $2) RETURNING id`,
        [VerticleId, Product || null]
      );
  
      const actionId = result.rows[0].id;
      res.status(201).json({ message: 'Action created successfully', actionId, VerticleId });
    } catch (err) {
      console.error('Error creating action:', err);
      res.status(500).json({ message: 'Error creating action', error: err.message });
    }
  });

  app.get('/export-excel', async (req, res) => {
    try {
      const result = await pool.query(`
        SELECT ud.name, ud.company, ud.country, ud.phone_number, ud.e_mail, ud.time, 
               v.vertical_name, a.product 
        FROM usersdetails ud
        LEFT JOIN verticles v ON ud.id = v.user_id
        LEFT JOIN actions a ON v.id = a.verticle_id;
      `);
  
      // Format the data with formatted dates
      const data = result.rows.map(row => ({
        Name: row.name,
        Company: row.company,
        Country: row.country,
        PhoneNumber: row.phone_number,
        Email: row.e_mail,
        Time: row.time ? format(new Date(row.time), 'dd/MM/yyyy HH:mm') : null, // Format the date
        VerticalName: row.vertical_name,
        Product: row.product,
      }));
  
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  
      const filePath = path.join(__dirname, 'output.xlsx');
      XLSX.writeFile(workbook, filePath);
  
      res.download(filePath, 'export.xlsx', (err) => {
        if (err) {
          console.error('Error sending file:', err);
          res.status(500).json({ message: 'Error exporting data', error: err.message });
        }
  
        fs.unlink(filePath, (unlinkErr) => {
          if (unlinkErr) console.error('Error deleting file:', unlinkErr);
        });
      });
    } catch (err) {
      console.error('Error exporting data:', err);
      res.status(500).json({ message: 'Error exporting data', error: err.message });
    }
  });  
  
  
  
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
