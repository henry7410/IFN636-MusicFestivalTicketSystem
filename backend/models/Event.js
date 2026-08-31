const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({

    eventName: {
        type: String,
        required: true
    },

    venue: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    ticketPrice: {
        type: Number,
        required: true
    },

    ticketQuantity: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('Event', eventSchema);