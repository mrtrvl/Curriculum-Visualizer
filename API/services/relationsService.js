// eslint-disable-next-line import/no-extraneous-dependencies
const { v4: uuidv4 } = require('uuid');
const curriculums = require('../curriculums');

const relationsService = {
  getRelations: async (curriculumVersionUuid) => {
    const curriculum = curriculums.find((c) => c.uuid === curriculumVersionUuid);
    return curriculum.relations;
  },
  addRelation: async (curriculumVersionUuid, relation) => {
    const curriculum = curriculums.find((c) => c.uuid === curriculumVersionUuid);
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
