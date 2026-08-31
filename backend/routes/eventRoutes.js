const express = require('express');

const router = express.Router();

const {
    createEvent,
    getEvents,
    updateEvent,
    deleteEvent
} = require('../controllers/eventController');

// SCRUM-135 Connect dashboard to backend API

router.get('/', getEvents);

// SCRUM-129 Connect event form to backend API

router.post('/', createEvent);

// SCRUM-142 Connect edit form to backend API

router.put('/:id', updateEvent);

// SCRUM-146 Connect deletion request to backend API

router.delete('/:id', deleteEvent);


module.exports = router;