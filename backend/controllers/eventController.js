const Event = require('../models/Event');

// SCRUM-130 Implement event creation business logic

const createEvent = async (req, res) => {

    try {

        const {
            eventName,
            venue,
            date,
            description,
            ticketPrice,
            ticketQuantity
        } = req.body;

        const event = await Event.create({
            eventName,
            venue,
            date,
            description,
            ticketPrice,
            ticketQuantity
        });

        res.status(201).json(event);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    createEvent
};