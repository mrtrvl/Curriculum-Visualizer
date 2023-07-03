function updatePosition(uuid, position) {
  axios.post(`${apiUrl}/curriculums/${curriculumVersionUuid}/subjects/position`, { uuid, position });
}