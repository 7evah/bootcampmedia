const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) => {
    console.log('Request to / (Homepage)');
    res.send('<h1>Welcome to the Homepage!</h1><p>This is the main page of our simple Express app.</p>');
});

router.get('/about', (req, res) => {
    console.log('Request to /about (About Us page)');
    res.send('<h1>About Us</h1><p>We are a simple Express.js application demonstrating modular routing.</p>');
});

module.exports = router;