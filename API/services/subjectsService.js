// eslint-disable-next-line import/no-extraneous-dependencies
const { v4: uuidv4 } = require('uuid');

const curriculums = require('../curriculums');

const subjectsService = {
  addSubject: async (curriculumVersionUuid, subject) => {
    const newSubject = {
      data: {
        ...subject,
        uuid: uuidv4(),
      },
    };
    const curriculum = curriculums.find((c) => c.uuid === curriculumVersionUuid);
    curriculum.subjects.push(newSubject);
    return subject;
  },
  updateSubject: async (curriculumVersionUuid, uuid, subject) => {
    const curriculum = curriculums.find((c) => c.uuid === curriculumVersionUuid);
    const subjectToUpdate = curriculum.subjects.find((s) => s.data.uuid === uuid);
    subjectToUpdate.data = {
      ...subject,
      uuid,
    };
    return subjectToUpdate;
  },
  updatePosition: async (curriculumVersionUuid, uuid, position) => {
    const curriculum = curriculums.find((c) => c.uuid === curriculumVersionUuid);
    const subject = curriculum.subjects.find((s) => s.data.uuid === uuid);
    subject.position = position;
  },
};

module.exports = subjectsService;
