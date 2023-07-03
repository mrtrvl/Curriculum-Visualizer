const mongoose = require('./db');

const learningOutcomeSchema = new mongoose.Schema({
  id: Number,
  description: String,
});

const topicSchema = new mongoose.Schema({
  id: Number,
  topic: String,
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
  },
  position: {
    x: Number,
    y: Number,
  },
  learningOutcomes: [learningOutcomeSchema],
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

module.exports = mongoose.model('Curriculum', curriculumSchema);
