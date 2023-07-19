const curriculumRouter = require('express').Router();

const curriculumController = require('../controllers/curriculumController');

curriculumRouter
  .get('/', curriculumController.getCurriculums)
  .get('/versions', curriculumController.getCurriculumVersions)
  .get('/:version/subjects', curriculumController.getSubjectsByCurriculumVersion)
  .post('/:version/subjects', curriculumController.addSubjectToCurriculumVersion)
  .post('/:version/subjects/position', curriculumController.updateSubjectPosition)
  .post('/', curriculumController.addCurriculum)
  .put('/:version/subjects/:uuid', curriculumController.updateSubject)
  .post('/:version/relations', curriculumController.addSubjectsRelation)
  .delete('/:version/relations/:relationId', curriculumController.deleteSubjectsRelation)
  .post('/copy', curriculumController.copyCurriculum)
  .delete('/:version', curriculumController.deleteCurriculum);

module.exports = curriculumRouter;
