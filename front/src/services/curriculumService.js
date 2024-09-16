import axios from 'axios';
import config from '../config';

const { apiUrl } = config;

// Curriculum service
const getCurriculumVersions = async () => {
  const response = await axios.get(`${apiUrl}/curriculums/versions`);
  return response.data;
};

const getCurriculum = async (versionId) => {
  const response = await axios.get(`${apiUrl}/curriculums?version=${versionId}`);
  return response.data;
};

const addCurriculum = async (curriculum) => {
  const response = await axios.post(`${apiUrl}/curriculums`, curriculum);
  return response.data;
};

const deleteCurriculum = async (versionId) => {
  const response = await axios.delete(`${apiUrl}/curriculums/${versionId}`);
  return response.data;
};

const copyCurriculum = async (versionId, newVersionName) => {
  const response = await axios.post(`${apiUrl}/curriculums/copy`, { versionId, version: newVersionName });
  return response.data;
};

const curriculumService = {
  getCurriculumVersions,
  getCurriculum,
  addCurriculum,
  deleteCurriculum,
  copyCurriculum,
};

export default curriculumService;
