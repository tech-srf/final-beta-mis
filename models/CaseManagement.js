const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CaseManagementSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    
    caseManagement: [{
        clientType: {
            type: String,
            required: true,
        },
        issueAddressed: {
            type: String,
            required: true,
        },
        challenges: {
            type: String,
            required: true,
        },
        nextSteps: {
            type: String,
            required: true,
        },
        AddiionalComments: {
            type: String,
            required: true,
        }
    }]
});

module.exports = mongoose.model('CaseManagement', CaseManagementSchema)