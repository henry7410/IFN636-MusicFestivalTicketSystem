const express = require('express');
const router = express.Router();

const {
    createBooking
} = require('../controllers/bookingController');

// SCRUM-102 Connect purchase page to backend API
router.post('/', createBooking);

module.exports = router;