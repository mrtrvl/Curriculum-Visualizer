function updatePosition(uuid, position) {
  const curriculumVersionUuid = localStorage.getItem('curriculumVersionUuid');
  axios.post(`${apiUrl}/curriculums/${curriculumVersionUuid}/subjects/position`, { uuid, position });
}