const express = require('express');

const router = express.Router();

const {
    createEvent
} = require('../controllers/eventController');

// SCRUM-129 Connect event form to backend API

router.post('/', createEvent);

module.exports = router;