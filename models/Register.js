const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema ({
    date: {
        type: Date,
        default:Date.now
    },

    householdDemographic: [{
        relationship: {
            type: String,
            required: true,
        },
        maritalStatus: {
            type: String,
            required: true,
        },
        deceasedRelationship: {
            type: String,
            required: false,
        },
        yearOfDeath: {
            type: Number,
            required: false,
        },
        causeOfDeath: {
            type: String,
            required: false,
        },
        deathCertificate: {
            type: String,
            required: false,
        },
        yearOfSeparation: {
            type: Number,
            required: false,
        },
        causeOfSeparation: {
            type: String,
            required: false,
        },
        householdDescription: {
            type: String,
            required: true,
        },
    }],

    communityRelations:[{
        countyOfResidence: {
            type: String,
            required: true,
        },
        areaOfResidence: {
            type: String,
            required: true,
        },
        yearsInResidence: {
            type: Number,
            required: true,
        },
        typeOfHome: {
            type: String,
            required: true,
        },
        numberOfRooms: {
            type: String,
            required: true,
        },
        familyPossessions: {
            type: String,
            required: true,
        },
        sleepingArrangements: {
            type: String,
            required: true,
        },
        waterAccess: {
            type: String,
            required: true,
        },
        additionalAccess: {
            type: String,
            required: true,
        },
        enviroment: {
            type: String,
            required: true,
        }
    }],

    financials: [{
        food:[{
            amount: {
                type: Number,
                required: true,
            },
            frequency: {
                type: String,
                required: true,
            }
        }],
        rent:[{
            amount: {
                type: Number,
                required: true,
            },
            frequency: {
                type: String,
                required: true,
            }
        }],
        electricity:[{
            amount: {
                type: Number,
                required: true,
            },
            frequency: {
                type: String,
                required: true,
            }
        }],
        water:[{
            amount: {
                type: Number,
                required: true,
            },
            frequency: {
                type: String,
                required: true,
            }
        }],
        toilet:[{
            amount: {
                type: Number,
                required: true,
            },
            frequency: {
                type: String,
                required: true,
            }
        }],
        medicalTreatment:[{
            amount: {
                type: Number,
                required: true,
            },
            frequency: {
                type: String,
                required: true,
            }
        }],
        contributors: [{
            roleInFamily: {
                type: String,
                required: true,
            },
            typeOfWork: {
                type: String,
                required: true,
            },
            natureOfEmployment: {
                type: String,
                required: true,
            },
            income: [{
                amount: {
                    type: Number,
                    required: true,
                },
                frequency: {
                    type: String,
                    required: true,
                }
            }],
            additonalSkills: {
                type: String,
                required: false,
            },
            helpOptions: {
                type: String,
                required: true,
            }
        }],
    
    }],

    health:[{
        name: {
            type: String,
            required: true,
        },
        relationship: {
            type: String,
            required: true,
        },
        medicalConcerns: {
            type: String,
            required: true,
        },
        treatmentStatus: {
            type: String,
            required: true,
        },
        medicalCover: {
            type: String,
            required: true,
        },
        nhifNumber: {
            type: Number,
            required: false,
        }
    }],

    familySafety:[{
        substanceAbuse: {
            type: String,
            required: true,
        },
        member: {
            type: String,
            required: false,
        },
        substance: {
            type: String,
            required: false,
        },
        periodOfSubtanceUse: {
            type: String,
            required: false,
        },
        actionsByParents: {
            type: String,
            required: false,
        },
        familyRelationship: {
            type: String,
            required: false,
        }
    }],

    communitySafety:[{
        concerns: {
            type: String,
            required: false,
        },
        abuseType: {
            type: String,
            required: false,
        },
        abuseExplanation: {
            type: String,
            required: false,
        },
        abuseHistory: {
            type: String,
            required: false,
        },
        membersAffected: {
            type: String,
            required: false,
        },
        relationshipToHousehold: {
            type: String,
            required: false,
        },
        abouseCaseHistory: {
            type: String,
            required: false,
        },
        srfAssistaceRequest: {
            type: String,
            required: false,
        }
    }],

    srfBeneficiaries:[{
        name: {
            type: String,
            required: false,
        },
        dateOfBirth: {
            type: Number,
            required: false,
        },
        school: {
            type: String,
            required: false,
        },
        class: {
            type: String,
            required: false,
        },
        yearOfEntry: {
            type: Number,
            required: false,
        },
        membershipStatus: {
            type: String,
            required: false,
        }
    }],

    consent:[{
        srfInvolvement: {
            type: String,
            required: true,
        },
        consentAgreement: {
            type: String,
            required: true,
        },
        careGiverName: {
            type: String,
            required: true,
        },
        date: {
            type: Number,
            required: true,
        },
    }],

    additonalInformation:[{
        otherOrganization: {
            type: String,
            required: false,
        },
        commentsOnSrf: {
            type: String,
            required: false,
        },
    }],

    socialWorkerSummary:[{
        familyObservation: {
            type: String,
            required: false,
        },
        familyBurden: {
            type: String,
            required: false,
        },
        vulerabilityScale: {
            type: String,
            required: true,
        },
        necesssaryRecommendations: {
            type: String,
            required: true,
        }
    }],

    uploads:[{
        
    }]

});

module.exports = mongoose.model('Register', RegisterSchema)