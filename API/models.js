const mongoose = require('./db');

const learningOutcomeSchema = new mongoose.Schema({
  id: Number,
  description: String,
});

const topicSchema = new mongoose.Schema({
  id: Number,
  topic: String,
});

const moduleSchema = new mongoose.Schema({
  name: String,
});

const relationSchema = new mongoose.Schema({
  data: {
    id: String,
    source: String,
    target: String,
    recommended: String,
  },
});

const subjectSchema = new mongoose.Schema({
  data: {
    id: String,
    uuid: String,
    volume: Number,
    mandatory: String,
    parent: String,
    category: String,
    description: String,
    code: String,
    grading: String,
    objectives: String,
    learningOutcomes: mongoose.Schema.Types.Mixed,
    keywords: [String],
  },
  position: {
    x: Number,
    y: Number,
  },
});

const curriculumSchema = new mongoose.Schema({
  name: String,
  version: String,
  uuid: String,
  subjects: [subjectSchema],
  relations: [relationSchema],
  learningOutcomes: [learningOutcomeSchema],
  topics: [topicSchema],
});

const Curriculum = mongoose.model('Curriculum', curriculumSchema);
const Model = mongoose.model('Model', moduleSchema);

module.exports = { Curriculum, Model };
