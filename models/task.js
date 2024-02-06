const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    due_date: { type: Date, required: true },
    priority: { type: Number, required: true },
    status: { type: String, default: 'TODO' },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);

