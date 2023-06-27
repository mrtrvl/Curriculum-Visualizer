const express = require('express');

const curriculumService = require('./curriculum');

const port = 3000;
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/curriculum', (req, res) => {
  const curriculum = curriculumService.getCurriculum();
  return res.status(200).json(curriculum);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
