/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
const { v4: uuidv4 } = require('uuid');

const Curriculum = require('../models/curriculumModel');

const subjectsService = {
  getSubjects: async (curriculumVersionUuid) => {
    const curriculum = await Curriculum.findOne({ uuid: curriculumVersionUuid });
    if (!curriculum) {
      throw new Error(`Curriculum version ${curriculumVersionUuid} not found`);
    }
    const subjects = curriculum.subjects.filter((subject) => !subject.data.deleted);
    return subjects;
  },
  addSubject: async (curriculumVersionUuid, subject) => {
    console.log(curriculumVersionUuid, subject);
    const newSubject = {
      data: {
        ...subject,
        uuid: uuidv4(),
      },
    };
    const updated = await Curriculum.findOneAndUpdate(
      { uuid: curriculumVersionUuid },
      { $push: { subjects: newSubject } },
      { new: true },
    );
    return updated;
  },
  updateSubject: async (curriculumVersionUuid, uuid, subject) => {
    const updated = Curriculum.findOneAndUpdate(
      { uuid: curriculumVersionUuid, 'subjects.data.uuid': uuid },
      {
        $set: {
          'subjects.$.data': {
            ...subject,
            uuid,
          },
        },
      },
      { new: true },
    );
    return updated;
  },
  updatePosition: async (curriculumVersionUuid, uuid, position) => {
    await Curriculum.findOneAndUpdate(
      {
        uuid: curriculumVersionUuid,
        'subjects.data.uuid': uuid,
      },
      {
        $set: {
          'subjects.$.position': position,
        },
      },
      { new: true },
    );
  },
  deleteSubject: async (curriculumVersionUuid, uuid) => {
    const deleted = await Curriculum.findOneAndUpdate(
      { uuid: curriculumVersionUuid },
      { $set: { 'subjects.$[elem].data.deleted': true } },
      {
        arrayFilters: [{ 'elem.data.uuid': uuid }],
        new: true,
      },
    );
    return deleted;
  },
};

module.exports = subjectsService;
