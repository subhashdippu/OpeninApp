const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function authenticateToken(req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Access denied. Token not provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(403).json({ error: 'Invalid token. User not found.' });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(403).json({ error: 'Invalid token.' });
    }
}

module.exports = { authenticateToken };
