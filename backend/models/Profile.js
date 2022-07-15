const mongoose = require('mongoose');
const ProfileSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:  'user'
    },
    role: {
        type: String,
        required: true
    },
    clinic: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('profile', ProfileSchema);