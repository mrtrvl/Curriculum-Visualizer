/* eslint-disable import/extensions */
const curriculums = require('../curriculums');

const curriculumService = {
  getCurriculum: (version) => {
    const curriculumVersion = curriculums.find((curriculum) => curriculum.version === version);
    if (!curriculumVersion) {
      throw new Error(`Curriculum version ${version} not found`);
    }
    return curriculumVersion;
  },
};

module.exports = curriculumService;
