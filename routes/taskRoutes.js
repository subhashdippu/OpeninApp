const express = require('express');
const router = express.Router();
const { createTask } = require('../controllers/taskController');
const { authenticateToken } = require('../middlewares/authMiddleware');


router.post('/', authenticateToken, createTask);
// Implement other task-related routes

module.exports = router;
