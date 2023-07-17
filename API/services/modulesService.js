/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-extraneous-dependencies
const Module = require('../models/moduleModel');

const modulesService = {
  addModule: async (module) => {
    const newModule = {
      ...module,
    };
    const createdModule = await Module.create(newModule);
    return createdModule;
  },
  getModules: async () => {
    const allModules = await Module.find({}).sort('name');
    return allModules;
  },
};

module.exports = modulesService;
