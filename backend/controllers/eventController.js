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

// SCRUM-137 Display created events list

const getEvents = async (req, res) => {

    try {

        const events = await Event.find();

        res.json(events);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// SCRUM-143 Implement event update business logic

const updateEvent = async (req, res) => {

    try {

        const event = await Event.findById(
            req.params.id
        );

        if (!event) {

            return res.status(404).json({
                message: 'Event not found'
            });

        }

        event.eventName =
            req.body.eventName;

        event.venue =
            req.body.venue;

        event.date =
            req.body.date;

        event.description =
            req.body.description;

        event.ticketPrice =
            req.body.ticketPrice;

        event.ticketQuantity =
            req.body.ticketQuantity;

        await event.save();

        res.json(event);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// SCRUM-150 Implement event deletion business logic

const deleteEvent = async (req, res) => {

    try {

        const event = await Event.findById(
            req.params.id
        );

        if (!event) {

            return res.status(404).json({
                message: 'Event not found'
            });

        }

        await Event.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message: 'Event deleted'
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    createEvent,
    getEvents,
    updateEvent,
    deleteEvent
};