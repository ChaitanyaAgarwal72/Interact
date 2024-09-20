/*const express = require('express');
const router = express.Router();
const Study = require('../models/study'); // Ensure the path matches your file structure

// Create listing
router.get('/create', (req, res) => {
    res.render('create_study'); // Ensure you have a create_study.ejs file in your views
});

router.post('/create', async (req, res) => {
    const { purpose, meetingLink, createdBy } = req.body;

    try {
        // Create a new Study listing
        const listing = new Study({ purpose, meetingLink, createdBy });
        await listing.save();

        // Redirect to listings page after saving
        res.redirect('/study/listings');
    } catch (error) {
        console.error('Error creating listing:', error);
        res.status(500).send('Internal Server Error'); // Handle errors gracefully
    }
});

// View listings
router.get('/listings', async (req, res) => {
    try {
        const listings = await Study.find(); // Fetch all listings from the database
        res.render('listings', { listings }); // Ensure you have a listings.ejs file in your views
    } catch (error) {
        console.error('Error fetching listings:', error);
        res.status(500).send('Internal Server Error'); // Handle errors gracefully
    }
});

// Export the router
module.exports = router;*/
