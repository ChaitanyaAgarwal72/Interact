/*const express = require('express');
const router = express.Router();
const Others = require('../models/others'); // Ensure you have a model for others

// Create listing
router.get('/create', (req, res) => {
    res.render('create_others'); // Ensure you have a create_others.ejs file in your views
});

router.post('/create', async (req, res) => {
    const { purpose, details, createdBy } = req.body;

    try {
        // Create a new Others listing
        const listing = new Others({ purpose, details, createdBy });
        await listing.save();

        // Redirect to listings page after saving
        res.redirect('/others/listings');
    } catch (error) {
        console.error('Error creating listing:', error);
        res.status(500).send('Internal Server Error'); // Handle errors gracefully
    }
});

// View listings
router.get('/listings', async (req, res) => {
    try {
        const listings = await Others.find(); // Fetch all listings from the database
        res.render('listings', { listings }); // Ensure you have a listings.ejs file in your views
    } catch (error) {
        console.error('Error fetching listings:', error);
        res.status(500).send('Internal Server Error'); // Handle errors gracefully
    }
});

// Export the router
module.exports = router;*/
