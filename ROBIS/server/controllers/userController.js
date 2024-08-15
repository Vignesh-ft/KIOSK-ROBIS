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


const deleteUser = async (req, res) => {
    try {
      const username = req.params.username;
      const deletedUser = await userModel.findOneAndDelete({ username });
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Server error' });
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

module.exports = { createUser, getAllUsers, getUserById, loginUser, deleteUser };
