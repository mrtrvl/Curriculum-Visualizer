const moduleRouter = require('express').Router();

const moduleController = require('../controllers/moduleController');

moduleRouter
  .post('/', moduleController.addModule)
  .get('/', moduleController.getModules);

module.exports = moduleRouter;
