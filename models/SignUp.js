const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignUpSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    careGiverName: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    relationship: {
        type: String,
        required: true,
    },
    clinic: {
        type: String,
        required: true,
    },
    team: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('SignUp', SignUpSchema)