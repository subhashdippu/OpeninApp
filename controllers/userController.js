const User = require('../models/user');

async function createUser(req, res) {
    try {
        const { phone_number, priority } = req.body;

        const newUser = new User({
            phone_number,
            priority,
        });

        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { createUser };
