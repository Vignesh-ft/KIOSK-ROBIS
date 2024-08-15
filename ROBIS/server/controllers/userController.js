// controllers/userController.js
const userModel = require('../models/userModel');
const pool = require('../dbconfig')

const createUser = async (req, res) => {
    const { username, company, email, country, phone } = req.body;

    try {
        const newUser = await pool.query(
            'INSERT INTO users (username, company, email, country, phone) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [username, company, email, country, phone]
        );
        res.status(201).json(newUser.rows[0]);
    } catch (err) {
        console.error('Error inserting data', err);
        res.status(500).json({ error: 'Server error' });
    }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
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

module.exports = { createUser, getAllUsers, getUserById, loginUser };
