const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  languages: {
    type: String,
  },
  frontend: {
    type: String,
  },
  backend: {
    type: String,
  },
  tools: {
    type: String,
  },
});

const SkillModel = mongoose.model("Skill", skillSchema);

module.exports = SkillModel;
