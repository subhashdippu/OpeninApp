const Subtask = require('../models/subtask');

async function createSubtask(req, res) {
    try {
        const { task_id } = req.body;

        const newSubtask = new Subtask({
            task_id,
        });

        await newSubtask.save();

        res.status(201).json(newSubtask);
    } catch (error) {
        console.error('Error creating subtask:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { createSubtask };
