const scrapeService = require('../services/scrapeService');

const scrapeController = {
  scrapeSubjectFromOis: async (req, res) => {
    const { subjectCode } = req.params;
    const subject = await scrapeService.getSubject(subjectCode);
    return res.status(200).json(subject);
  },
};

module.exports = scrapeController;
