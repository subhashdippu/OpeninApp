const express = require('express');
const router = express.Router();
const { createSubtask } = require('../controllers/subtaskController');
const { authenticateToken } = require('../middlewares/authMiddleware');

// Subtask routes
router.post('/', authenticateToken, createSubtask);

module.exports = router;
