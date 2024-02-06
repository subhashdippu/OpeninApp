const mongoose = require('mongoose');

const subtaskSchema = new mongoose.Schema({
    task_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    status: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Subtask', subtaskSchema);
