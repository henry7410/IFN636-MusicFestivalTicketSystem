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

module.exports = {
    createBooking
};
``