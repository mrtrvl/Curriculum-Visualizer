const scrapeRouter = require('express').Router();

const scrapeController = require('../controllers/scrapeController');

scrapeRouter.get('/:subjectCode', scrapeController.scrapeSubjectFromOis);

module.exports = scrapeRouter;
