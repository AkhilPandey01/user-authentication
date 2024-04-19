const express = require('express');
const connectDB = require('./db/db');

// Connect to the database
connectDB();

const app = express();
const PORT = 3000;

// Mount the userRoute
const userRoute = require('./routes/user.routes');
app.use('/user', userRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
