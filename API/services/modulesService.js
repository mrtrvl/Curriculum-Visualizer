/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-extraneous-dependencies
const Module = require('../models/moduleModel');

const modulesService = {
  addModel: async (model) => {
    const newModel = {
      ...model,
    };
    const createdModel = await Module.create(newModel);
    return createdModel;
  },
  getModels: async () => {
    const allModels = await Module.find({});
    return allModels;
  },
};

module.exports = modulesService;
