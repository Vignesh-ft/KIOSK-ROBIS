const pool = require('../dbconfig');

const createUser = async (user) => {
  const { username, company, email, country, phone } = user;
  try {
    const result = await pool.query(
      `INSERT INTO users (username, company, email, country, phone) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING id, username, company, email, country, phone`,
      [username, company, email, country, phone]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error creating user: ' + err.message);
  }
};

module.exports = { createUser };
