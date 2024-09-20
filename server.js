const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve CSS and JS files
app.set('view engine', 'ejs');

// Routes
const userRoutes = require('./routes/users'); // User routes
const travelRoutes = require('./routes/travel'); // Travel routes
const studyRoutes = require('./routes/study'); // Study routes
const othersRoutes = require('./routes/others'); // Others routes

// Use the routes
app.use('/', userRoutes);
app.use('/travel', travelRoutes);
app.use('/study', studyRoutes);
app.use('/others', othersRoutes);

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('404: Page Not Found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
