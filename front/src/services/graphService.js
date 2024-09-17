import axios from 'axios';
import config from '../config';

const { apiUrl } = config;

const updatePosition = async (uuid, position) => {
  const curriculumVersionUuid = localStorage.getItem('curriculumVersionUuid');
  axios.post(`${apiUrl}/curriculums/${curriculumVersionUuid}/subjects/position`, { uuid, position });
};

const graphService = {
  updatePosition,
};

export default graphService;
