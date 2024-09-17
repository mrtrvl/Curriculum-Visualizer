import axios from 'axios';
import config from '../config';

const { apiUrl } = config;

// Modules service
const getModules = async () => {
  const response = await axios.get(`${apiUrl}/modules`);
  return response.data;
};

const addModule = async (module) => {
  const response = await axios.post(`${apiUrl}/modules`, module);
  return response.data;
};

const deleteModule = async (uuid) => {
  const response = await axios.delete(`${apiUrl}/modules/${uuid}`);
  return response.data;
};

const updateModule = async (module) => {
  const response = await axios.put(`${apiUrl}/modules/${module.uuid}`, module);
  return response.data;
};

const modulesService = {
  getModules,
  addModule,
  deleteModule,
  updateModule,
};

export default modulesService;

