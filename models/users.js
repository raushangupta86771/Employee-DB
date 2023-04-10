const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    primaryEmergencyContact: {
        name: String,
        phoneNumber: String,
        relationship: String
    },
    secondaryEmergencyContact: {
        name: String,
        phoneNumber: String,
        relationship: String
    }
});

module.exports = mongoose.model('Employee', employeeSchema);
