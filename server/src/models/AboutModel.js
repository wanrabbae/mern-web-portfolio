const moongoose = require('mongoose');

const aboutSchema = new moongoose.Schema({
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

const AboutModel = moongoose.model('About', aboutSchema);

module.exports = AboutModel;