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
    }
});

module.exports = mongoose.model('Booking', bookingSchema);