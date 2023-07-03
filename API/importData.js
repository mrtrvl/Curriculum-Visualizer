/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const mongoose = require('./db');
const Curriculum = require('./models');
const curriculums = require('./curriculums');

async function importData() {
  try {
    // await mongoose.connect();
    await Curriculum.deleteMany({});
    for (const curriculum of curriculums) {
      const newCurriculum = new Curriculum(curriculum);
      await newCurriculum.save();
    }

    console.log('Data import completed successfully');
    mongoose.disconnect();
  } catch (error) {
    console.error('Failed to import data', error);
    process.exit(1);
  }
}

importData();
