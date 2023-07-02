const curriculums = require('../curriculums');

const subjectsService = {
  getSubjects: async (curriculumVersion) => {
    const curriculum = curriculums.find((c) => c.version === curriculumVersion);
    return curriculum.subjects;
  },
  addSubject: async (curriculumVersion, subject) => {
    const curriculum = curriculums.find((c) => c.version === curriculumVersion);
    curriculum.subjects.push({ data: subject });
    return subject;
  },
};

module.exports = subjectsService;
