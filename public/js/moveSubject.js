function updatePosition(uuid, position) {
  axios.post(`${apiUrl}/curriculums/${version}/subjects/position`, { uuid, position });
}