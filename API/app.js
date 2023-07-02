const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');

const curriculumService = require('./services/curriculumService');

const port = 4000;
const app = express();

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/v1/curriculums', (req, res) => {
  const { version } = req.query;
  const curriculum = curriculumService.getCurriculum(version);
  return res.status(200).json(curriculum);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
