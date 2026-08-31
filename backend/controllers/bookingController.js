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

// SCRUM-118 Implement ticket transfer business logic
const transferTicket = async (req, res) => {

    try {

        const booking = await Booking.findById(
            req.params.id
        );

        if (!booking) {

            return res.status(404).json({
                message: 'Ticket not found'
            });

        }

        booking.recipientName =
            req.body.recipientName;

        booking.recipientEmail =
            req.body.recipientEmail;

        await booking.save();

        res.json({
            message: 'Ticket transferred'
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// SCRUM-122 Implement ticket cancellation business logic
const cancelTicket = async (req, res) => {

    try {

        const booking = await Booking.findById(
            req.params.id
        );

        if (!booking) {

            return res.status(404).json({
                message: 'Ticket not found'
            });

        }

        await Booking.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message: 'Ticket cancelled'
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    createBooking,
    getBookings,
    transferTicket,
    cancelTicket
};
