/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');

const curriculumRouter = require('./routes/curriculumRoutes');
const scrapeRouter = require('./routes/scrapeRoutes');

const port = 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ healthy: true }));

app.use('/api/v1/curriculums', curriculumRouter);
app.use('/api/v1/scrape', scrapeRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
