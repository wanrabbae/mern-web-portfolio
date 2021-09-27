const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    languages: {
        type: String,
        required: true
    },
    frontend: {
        type: String,
        required: true
    },
    backend: {
        type: String,
        required: true
    },
    tools: {
        type: String,
        required: true
    },
})

const SkillModel = mongoose.model('Skill', skillSchema);

module.exports = SkillModel;