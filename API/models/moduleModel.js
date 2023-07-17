const mongoose = require('../db');

const moduleSchema = new mongoose.Schema({
  name: String,
});

const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;
