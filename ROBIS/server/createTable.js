// createTable.js
const pool = require('./dbconfig');

const createTableQuery = `
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    country VARCHAR(100) NOT NULL,
    phone BIGINT NOT NULL
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
