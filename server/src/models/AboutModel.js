const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    profile: {
        type: {
            url: String,
            cloudinary_id: String
        },
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

const AboutModel = mongoose.model('About', aboutSchema);

module.exports = AboutModel;