const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    image: {
        type: {
            url: String,
            cloudinary_id: String
        },
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technologies: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
})

const ProjectModel = mongoose.model('Project', projectSchema);

module.exports = ProjectModel;