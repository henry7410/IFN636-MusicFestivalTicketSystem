const express = require('express');
const router = express.Router();

const {
    createBooking,
    getBookings
} = require('../controllers/bookingController');

// SCRUM-108 Connect ticket viewing pages to backend API
router.get('/', getBookings);

router.post('/', createBooking);

module.exports = router;