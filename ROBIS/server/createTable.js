// createTable.js
const pool = require('./dbconfig');

// const createTableQuery = `
//    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

//   CREATE TABLE IF NOT EXISTS UsersDetails (
//     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
//     Name VARCHAR(255),
//     E_Mail VARCHAR(255),
//     Company VARCHAR(255),
//     Country VARCHAR(255),
//     Phone_Number BIGINT,
//     time TIME
//   );

//   CREATE TABLE IF NOT EXISTS Verticles (
//     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
//     User_id UUID REFERENCES Users(id),
//     Vertical_Name VARCHAR(255)
//   );

//   CREATE TABLE IF NOT EXISTS Actions (
//     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
//     Verticle_id UUID REFERENCES Verticles(id),
//     Log_time TIMESTAMP,
//     Product VARCHAR(255),
//     Isdownloaded BOOLEAN
//   );
// `;

`CREATE TABLE verticles (
  id SERIAL PRIMARY KEY, -- Assuming you want an auto-incrementing primary key
  vertical_name VARCHAR(255) NOT NULL, -- Column for the name of the vertical
  user_id UUID NOT NULL, -- Foreign key column for user ID
  -- Additional columns can be added here as needed
  CONSTRAINT fk_user
      FOREIGN KEY (user_id) 
      REFERENCES userdetails(user_id) 
      ON DELETE CASCADE -- Optional: defines action on user deletion
)`;

// const createTable = async () => {
//     try {
//         await pool.query(createTableQuery);
//         console.log('Table "users" created successfully.');
//     } catch (err) {
//         console.error('Error creating table', err);
//     } finally {
//         pool.end();
//     }
// };

// const alterSchema = async () => {
//   try {
//     // Ensure UUID generation extension is enabled
//     await pool.query(`
//       CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
//     `);

//     // Alter Users table: Ensure id column is UUID
//     await pool.query(`
//       ALTER TABLE Users
//       ALTER COLUMN id SET DATA TYPE UUID USING (gen_random_uuid());
//     `);

//     // Alter Verticles table: Ensure user_id column is UUID
//     await pool.query(`
//       ALTER TABLE Verticles
//       ALTER COLUMN user_id SET DATA TYPE UUID;
//     `);

//     console.log('Schema updated successfully.');
//   } catch (err) {
//     console.error('Error updating schema:', err);
//   } finally {
//     await pool.end();
//   }
// };

// alterSchema();

createTable();
