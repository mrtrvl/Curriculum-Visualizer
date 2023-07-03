// const mongoose = require('../db');
const Curriculum = require('../models');

const curriculumService = {
  getCurriculums: async () => {
    const allCurriculums = await Curriculum.find({});
    return allCurriculums;
  },
  getCurriculum: async (version) => {
    const curriculumVersion = await Curriculum.findOne({ uuid: version });
    if (!curriculumVersion) {
      throw new Error(`Curriculum version ${version} not found`);
    }
    return curriculumVersion;
  },
  getVersions: async () => {
    const versions = await Curriculum.find({}).select({ uuid: 1, version: 1, _id: 0 });
    return versions;
  },
};

module.exports = curriculumService;
