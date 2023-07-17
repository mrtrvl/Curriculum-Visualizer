const curriculumService = require('../services/curriculumService');
const subjectsService = require('../services/subjectsService');
const relationsService = require('../services/relationsService');

const curriculumController = {
  addCurriculum: async (req, res) => {
    const curriculum = req.body;
    const newCurriculum = await curriculumService.addCurriculum(curriculum);
    return res.status(201).json(newCurriculum);
  },
  getCurriculums: async (req, res) => {
    const { version } = req.query;
    let curriculums;
    if (!version) {
      curriculums = await curriculumService.getCurriculums();
    } else {
      curriculums = await curriculumService.getCurriculum(version);
    }
    return res.status(200).json(curriculums);
  },
  getCurriculumVersions: async (req, res) => {
    const versions = await curriculumService.getVersions();
    return res.status(200).json(versions);
  },
  getSubjectsByCurriculumVersion: async (req, res) => {
    const { version } = req.params;
    const subjects = await subjectsService.getSubjects(version);
    return res.status(200).json(subjects);
  },
  addSubjectToCurriculumVersion: async (req, res) => {
    const { version } = req.params;
    const subject = req.body;
    const newSubject = await subjectsService.addSubject(version, subject);
    return res.status(201).json(newSubject);
  },
  updateSubjectPosition: async (req, res) => {
    const { version } = req.params;
    const { uuid, position } = req.body;
    subjectsService.updatePosition(version, uuid, position);
    return res.status(200).json();
  },
  updateSubject: async (req, res) => {
    const { version, uuid } = req.params;
    const subject = req.body;
    const updatedSubject = await subjectsService.updateSubject(version, uuid, subject);
    return res.status(200).json(updatedSubject);
  },
  addSubjectsRelation: async (req, res) => {
    const { version } = req.params;
    const relationToAdd = req.body;
    const newRelation = await relationsService.addRelation(version, relationToAdd);
    return res.status(201).json(newRelation);
  },
  deleteSubjectsRelation: async (req, res) => {
    const { version, relationId } = req.params;
    console.log(version, relationId);
    const removedRelation = await relationsService.removeRelation(version, relationId);
    return res.status(200).json(removedRelation);
  },

};

module.exports = curriculumController;
