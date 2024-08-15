// createTable.js
const pool = require('./dbconfig');

const createTableQuery = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  
  CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username TEXT UNIQUE NOT NULL,
    company TEXT,
    email TEXT,
    country TEXT,
    phone TEXT
  );
`;

const createTable = async () => {
    try {
        await pool.query(createTableQuery);
        console.log('Table "users" created successfully.');
    } catch (err) {
        console.error('Error creating table', err);
    } finally {
        pool.end();
    }
};

createTable();
