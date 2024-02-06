const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    phone_number: { type: String, required: true },
    priority: { type: Number, required: true },
});

module.exports = mongoose.model('User', userSchema);