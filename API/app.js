const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');

const curriculumService = require('./services/curriculumService');
const subjectsService = require('./services/subjectsService');
const relationsService = require('./services/relationsService');

const port = 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/v1/curriculums', (req, res) => {
  const { version } = req.query;
  const curriculum = curriculumService.getCurriculum(version);
  return res.status(200).json(curriculum);
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
  const { id, position } = req.body;
  subjectsService.updatePosition(version, id, position);
  return res.status(200).json();
});

app.put('/api/v1/curriculums/:version/subjects/:uuid', async (req, res) => {
  const { version, uuid } = req.params;
  const subject = req.body;
  const updatedSubject = await subjectsService.updateSubject(version, uuid, subject);
  return res.status(200).json(updatedSubject);
});

app.post('/api/v1/curriculums/:version/relations', async (req, res) => {
  const { version } = req.params;
  const relation = req.body;
  const newRelation = await relationsService.addRelation(version, relation);
  return res.status(201).json(newRelation);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
