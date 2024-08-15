// server.js
const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoute'); // Ensure the path is correct

// Middleware
app.use(cors()); // Allow CORS requests
app.use(express.json());


// Routes
app.use('/api', userRoutes); // Ensure userRoutes is properly exported

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
