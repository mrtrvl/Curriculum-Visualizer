/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { Model } = require('../models');

const modulesService = {
  addModel: async (model) => {
    const newModel = {
      ...model,
    };
    const createdModel = await Model.create(newModel);
    return createdModel;
  },
  getModels: async () => {
    const allModels = await Model.find({});
    return allModels;
  },
};

module.exports = modulesService;
