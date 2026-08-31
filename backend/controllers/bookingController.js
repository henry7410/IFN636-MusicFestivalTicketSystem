const Booking = require('../models/Booking');

// SCRUM-103 Implement booking record creation logic
const createBooking = async (req, res) => {

    try {

        const { eventName, quantity } = req.body;

        const booking = await Booking.create({
            eventName,
            quantity
        });

        res.status(201).json(booking);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// SCRUM-108 Connect ticket viewing pages to backend API
const getBookings = async (req, res) => {

    try {

        const bookings = await Booking.find();

        res.json(bookings);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    createBooking,
    getBookings
};
