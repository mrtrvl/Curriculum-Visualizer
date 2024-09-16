import axios from 'axios';
import config from '../config';

const { apiUrl } = config;

const updatePosition = async (id, position) => {
  const curriculumVersionUuid = localStorage.getItem('curriculumVersionUuid');
  const response = await axios.post(`${apiUrl}/curriculums/${curriculumVersionUuid}/subjects/position`, { id, position });
  console.log(response);
};

const graphService = {
  updatePosition,
};

export default graphService;
