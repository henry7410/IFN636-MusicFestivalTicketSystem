const express = require('express');

const router = express.Router();

const {
    createEvent,
    getEvents
} = require('../controllers/eventController');

// SCRUM-135 Connect dashboard to backend API

router.get('/', getEvents);

// SCRUM-129 Connect event form to backend API

router.post('/', createEvent);

module.exports = router;