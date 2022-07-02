const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Class8Schema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },

    classEight: [{
            respondent: {
                type: String,
                required: true,
            },
            noOfDependantsinClassEight: {
                type: Number,
                required: false,
            },
            currentPerformace: {
                type: String,
                required: true,
            },
            finalExamScore: {
                type: String,
                required: true,
            },
            highschool: [{
                expectation: {
                    type: String,
                    required: true,
                },
                reason: {
                    type: String,
                    required: false,
                },
            }],
            srfBeneficiaries: [{
                numberofChildren: {
                    type: Number,
                    required: false,
                },
                numberOfActiveMembers: {
                    type: Number,
                    required: false,
                },
                reasonForInactivity: {
                    type: String,
                    required: false,
                },
                recommendationsToSrf: {
                    type: String,
                    required: false,
                }
            }]
    }]
});

module.exports = mongoose.model('Class8', Class8Schema)