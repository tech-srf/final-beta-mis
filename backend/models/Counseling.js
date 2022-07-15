const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CounselingSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    clientType: {
        type: String,
        required: true,
    },
    sessionCategory: {
        type: String,
        required: true,
    },
    sessionType: {
        type: String,
        required: true,
    },
    issuesAddressed: {
        type: String,
        required: true,
    },
    attitudeBehaviour: {
        type: String,
        required: true,
    },
    challenges: {
        type: String,
        required: false,
    },
    nextSteps: {
        type: String,
        required: false,
    },
    treatmentPlan: {
        type: String,
        required: false,
    },
    comments: {
        type: String,
        required: false,
    },
    caseStatus: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Counseling', CounselingSchema)