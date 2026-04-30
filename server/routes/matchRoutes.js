const express = require('express');
const router = express.Router();
const { getMatches, discoverUsers } = require('../controllers/matchController');

// In a real app, you'd have auth middleware here
// const { protect } = require('../middleware/auth');
// router.get('/', protect, getMatches);

// For demo purposes, we'll assume a mock user ID is passed or handled in the controller
router.get('/', getMatches);
router.get('/discover', discoverUsers);

module.exports = router;
