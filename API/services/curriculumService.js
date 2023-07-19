// eslint-disable-next-line import/no-extraneous-dependencies
const { v4: uuidv4 } = require('uuid');

const Curriculum = require('../models/curriculumModel');

const curriculumService = {
  getCurriculums: async (deleted) => {
    if (deleted) {
      const allCurriculums = await Curriculum.find({ deleted: true }).sort('version');
      return allCurriculums;
    }
    const allCurriculums = await Curriculum.find({
      $or: [
        { deleted: false },
        { deleted: { $exists: false } },
      ],
    }).sort('version');
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
    const versions = await Curriculum.find({
      $or: [
        { deleted: false },
        { deleted: { $exists: false } },
      ],
    }).select({
      uuid: 1, version: 1, name: 1, _id: 0,
    }).sort('version');
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
  copyCurriculum: async (curriculumVersionUuid, newVersion) => {
    const curriculum = await Curriculum.findOne({ uuid: curriculumVersionUuid });
    if (!curriculum) {
      throw new Error(`Curriculum version ${curriculumVersionUuid} not found`);
    }
    const newCurriculum = {
      ...curriculum.toObject(),
      version: newVersion,
      uuid: uuidv4(),
    };
    // eslint-disable-next-line no-underscore-dangle
    delete newCurriculum._id;
    const createdCurriculum = await Curriculum.create(newCurriculum);
    return createdCurriculum;
  },
  deleteCurriculum: async (curriculumVersionUuid) => {
    const deleted = await Curriculum.findOneAndUpdate(
      { uuid: curriculumVersionUuid },
      { deleted: true },
      { new: true },
    );
    return deleted;
  },
};

module.exports = curriculumService;
