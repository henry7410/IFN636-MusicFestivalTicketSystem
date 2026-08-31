const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    purchaseDate: {
    type: Date,
    default: Date.now
    },

    recipientName: {
        type: String,
        default: ''
    },

    recipientEmail: {
        type: String,
        default: ''
    }

});

module.exports = mongoose.model('Booking', bookingSchema);