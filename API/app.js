/* eslint-disable no-unused-vars */
const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');

const curriculumService = require('./services/curriculumService');
const subjectsService = require('./services/subjectsService');
const relationsService = require('./services/relationsService');
const scrapeService = require('./services/scrapeService');

const port = 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/v1/curriculums', async (req, res) => {
  const { version } = req.query;
  let curriculums;
  if (!version) {
    curriculums = await curriculumService.getCurriculums();
  } else {
    curriculums = await curriculumService.getCurriculum(version);
  }
  return res.status(200).json(curriculums);
});

app.get('/api/v1/curriculums/versions', async (req, res) => {
  const versions = await curriculumService.getVersions();
  return res.status(200).json(versions);
});

app.get('/api/v1/curriculums/:version/subjects', async (req, res) => {
  const { version } = req.params;
  const subjects = await subjectsService.getSubjects(version);
  return res.status(200).json(subjects);
});

app.post('/api/v1/curriculums/:version/subjects', async (req, res) => {
  const { version } = req.params;
  const subject = req.body;
  const newSubject = await subjectsService.addSubject(version, subject);
  return res.status(201).json(newSubject);
});

app.post('/api/v1/curriculums/:version/subjects/position', async (req, res) => {
  const { version } = req.params;
  const { uuid, position } = req.body;
  subjectsService.updatePosition(version, uuid, position);
  return res.status(200).json();
});

app.post('/api/v1/curriculums/', async (req, res) => {
  const curriculum = req.body;
  const newCurriculum = await curriculumService.addCurriculum(curriculum);
  return res.status(201).json(newCurriculum);
});

app.put('/api/v1/curriculums/:version/subjects/:uuid', async (req, res) => {
  const { version, uuid } = req.params;
  const subject = req.body;
  const updatedSubject = await subjectsService.updateSubject(version, uuid, subject);
  return res.status(200).json(updatedSubject);
});

app.post('/api/v1/curriculums/:version/relations', async (req, res) => {
  const { version } = req.params;
  const relationToAdd = req.body;
  const newRelation = await relationsService.addRelation(version, relationToAdd);
  return res.status(201).json(newRelation);
});

app.delete('/api/v1/curriculums/:version/relations/:relationId', async (req, res) => {
  const { version, relationId } = req.params;
  const removedRelation = await relationsService.removeRelation(version, relationId);
  return res.status(200).json(removedRelation);
});

app.get('/api/v1/scrape/:subjectCode', async (req, res) => {
  const { subjectCode } = req.params;
  const subject = await scrapeService.getSubject(subjectCode);
  return res.status(200).json(subject);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
