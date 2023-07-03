// eslint-disable-next-line import/no-extraneous-dependencies
const { v4: uuidv4 } = require('uuid');

const curriculums = require('../curriculums');

const subjectsService = {
  getSubjects: async (curriculumVersion) => {
    const curriculum = curriculums.find((c) => c.version === curriculumVersion);
    return curriculum.subjects;
  },
  addSubject: async (curriculumVersion, subject) => {
    const newSubject = {
      data: {
        ...subject,
        uuid: uuidv4(),
      },
    };
    const curriculum = curriculums.find((c) => c.version === curriculumVersion);
    curriculum.subjects.push(newSubject);
    return subject;
  },
  updateSubject: async (curriculumVersion, uuid, subject) => {
    const curriculum = curriculums.find((c) => c.version === curriculumVersion);
    const subjectToUpdate = curriculum.subjects.find((s) => s.data.uuid === uuid);
    subjectToUpdate.data = subject;
    return subjectToUpdate;
  },
  updatePosition: async (curriculumVersion, id, position) => {
    const curriculum = curriculums.find((c) => c.version === curriculumVersion);
    const subject = curriculum.subjects.find((s) => s.data.id === id);
    subject.position = position;
  },
};

module.exports = subjectsService;
