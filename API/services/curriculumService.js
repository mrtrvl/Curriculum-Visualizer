// eslint-disable-next-line import/no-extraneous-dependencies
const { v4: uuidv4 } = require('uuid');

const Curriculum = require('../models/curriculumModel');

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
  addCurriculum: async (curriculum) => {
    const semesterCount = Number(curriculum.semesterCount, 10);
    const subjects = [];
    for (let i = 1; i <= semesterCount; i += 1) {
      subjects.push({
        data: {
          id: `${i}. semester`,
          uuid: uuidv4(),
        },
      });
    }
    const newCurriculum = {
      name: curriculum.name,
      version: curriculum.version,
      uuid: uuidv4(),
      subjects: [...subjects],
    };
    const createdCurriculum = await Curriculum.create(newCurriculum);
    return createdCurriculum;
  },
};

module.exports = curriculumService;
