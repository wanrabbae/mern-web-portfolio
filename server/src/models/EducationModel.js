const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
})

const EducationModel = mongoose.model('Education', educationSchema);

module.exports = EducationModel