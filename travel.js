/*const express = require('express');
const router = express.Router();
const Travel = require('../models/travel'); // Ensure the path matches your file structure

// Create listing
router.get('/create', (req, res) => {
    res.render('create_travel'); // Ensure you have a create_travel.ejs file in your views
});

router.post('/create', async (req, res) => {
    const { name, destination, date, time, vacancy, mobile } = req.body;

    try {
        // Create a new Travel listing
        const listing = new Travel({ 
            name, 
            destination, 
            date, 
            time, 
            vacancy, 
            mobile 
        });
        await listing.save();

        // Redirect to listings page after saving
        res.redirect('/travel/listings');
    } catch (error) {
        console.error('Error creating listing:', error);
        res.status(500).send('Internal Server Error'); // Handle errors gracefully
    }
});

// View listings
router.get('/listings', async (req, res) => {
    try {
        const listings = await Travel.find(); // Fetch all listings from the database
        res.render('listings', { listings }); // Ensure you have a listings.ejs file in your views
    } catch (error) {
        console.error('Error fetching listings:', error);
        res.status(500).send('Internal Server Error'); // Handle errors gracefully
    }
});

// Export the router
module.exports = router;*/
