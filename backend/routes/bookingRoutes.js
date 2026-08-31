const express = require('express');
const router = express.Router();

const {
    createBooking,
    getBookings,
    transferTicket
} = require('../controllers/bookingController');

// SCRUM-108 Connect ticket viewing pages to backend API
router.get('/', getBookings);

router.post('/', createBooking);

// SCRUM-117 Connect update form to backend API
router.put('/:id', transferTicket);

module.exports = router;