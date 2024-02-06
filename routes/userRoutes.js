const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');
const { authenticateToken } = require('../middlewares/authMiddleware');

router.post('/', authenticateToken, createUser);

module.exports = router;
