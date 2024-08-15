// controllers/userController.js
const userModel = require('../models/userModel');
const pool = require('../dbconfig')

const createUser = async (req, res) => {
    const { username, company } = req.body;

    try {
      // Check if the username already exists
      const existingUser = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
  
      if (existingUser.rows.length > 0) {
        return res.status(400).json({ message: 'Username already exists' });
      }
  
      // Proceed to insert the new user
      const newUser = await pool.query(
        'INSERT INTO users (username, company) VALUES ($1, $2) RETURNING *',
        [username, company]
      );
  
      res.status(201).json(newUser.rows[0]); // Respond with the created user
    } catch (err) {
      console.error('Error inserting data', err);
      res.status(500).json({ message: 'Server error' });
    }
};



// Function to delete a user by ID
const deleteUser = async (req, res) => {
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
  };
  
  

const loginUser = async (req, res) => {
    const { username, company } = req.body;
  
    if (!username || !company) {
      return res.status(400).json({ error: 'Username and Company are required' });
    }
  
    try {
      const result = await pool.query('SELECT * FROM users WHERE username = $1 AND company = $2', [username, company]);
      
      if (result.rows.length > 0) {
        res.json({ message: 'Login successful', user: result.rows[0] });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };

module.exports = { createUser,  loginUser, deleteUser };
