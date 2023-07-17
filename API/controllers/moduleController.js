const modulesService = require('../services/modulesService');

const moduleController = {
  addModule: async (req, res) => {
    const { module } = req.body;
    const newModule = await modulesService.addModule(module);
    return res.status(201).json(newModule);
  },
  getModules: async (req, res) => {
    const modules = await modulesService.getModules();
    return res.status(200).json(modules);
  },
};

module.exports = moduleController;
