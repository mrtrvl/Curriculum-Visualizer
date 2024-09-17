import axios from 'axios';
import config from '../config';

const { apiUrl } = config;

// Get all subjects
const getSubjects = async (curriculumVersionUuid) => {
  const response = await axios.get(`${apiUrl}/curriculums/${curriculumVersionUuid}/subjects`);
  return response.data;
};

// Add or update a subject
const saveSubject = async (curriculumVersionUuid, subjectData) => {
  let response;
  if (!subjectData.uuid || subjectData.uuid === 'undefined') {
    response = await axios.post(`${apiUrl}/curriculums/${curriculumVersionUuid}/subjects`, subjectData);
  } else {
    response = await axios.put(`${apiUrl}/curriculums/${curriculumVersionUuid}/subjects/${subjectData.uuid}`, subjectData);
  }
  return response.data;
};

// Delete a subject
const deleteSubject = async (curriculumVersionUuid, uuid) => {
  const response = await axios.delete(`${apiUrl}/curriculums/${curriculumVersionUuid}/subjects/${uuid}`);
  return response.status === 200;
};

// Get subject data from ÕIS
const getSubjectFromOis = async (subjectId) => {
  const response = await axios.get(`${apiUrl}/scrape/${subjectId}`);
  return response.data;
};

const subjectsService = {
  getSubjects,
  saveSubject,
  deleteSubject,
  getSubjectFromOis,
};

export default subjectsService;
