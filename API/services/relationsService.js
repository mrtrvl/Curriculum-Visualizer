/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { v4: uuidv4 } = require('uuid');
const Curriculum = require('../models/curriculumModel');

const relationsService = {
  addRelation: async (curriculumVersionUuid, relation) => {
    const newRelation = {
      data: {
        id: uuidv4(),
        source: relation.relation[0],
        target: relation.relation[1],
        recommended: relation.recommended,
      },
    };
    const updated = await Curriculum.findOneAndUpdate(
      { uuid: curriculumVersionUuid },
      { $push: { relations: newRelation } },
      { new: true },
    );

    return updated;
  },
  removeRelation: async (curriculumVersionUuid, relationId) => {
    const deleted = await Curriculum.findOneAndUpdate(
      { uuid: curriculumVersionUuid },
      { $pull: { relations: { 'data.id': relationId } } },
      { new: true },
    );
    return deleted;
  },
};

module.exports = relationsService;
