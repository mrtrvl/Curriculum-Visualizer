/* eslint-disable import/extensions */
const curriculums = require('../curriculums');

const curriculumService = {
  getCurriculum: (version) => {
    const curriculumVersion = curriculums.find((curriculum) => curriculum.uuid === version);
    if (!curriculumVersion) {
      throw new Error(`Curriculum version ${version} not found`);
    }
    return curriculumVersion;
  },
  getVersions: () => curriculums.map((curriculum) => ({
    uuid: curriculum.uuid,
    version: curriculum.version,
  })),
};

module.exports = curriculumService;
