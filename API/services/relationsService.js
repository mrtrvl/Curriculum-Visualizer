// eslint-disable-next-line import/no-extraneous-dependencies
const { v4: uuidv4 } = require('uuid');
const curriculums = require('../curriculums');

const relationsService = {
  getRelations: async (curriculumVersion) => {
    const curriculum = curriculums.find((c) => c.version === curriculumVersion);
    return curriculum.relations;
  },
  addRelation: async (curriculumVersion, relation) => {
    const curriculum = curriculums.find((c) => c.version === curriculumVersion);
    const newRelation = {
      data: {
        id: uuidv4(),
        source: relation[0],
        target: relation[1],
      },
    };
    curriculum.relations.push(newRelation);
    return newRelation;
  },
};

module.exports = relationsService;
