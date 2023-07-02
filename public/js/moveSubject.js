function updatePosition(id, position) {
  const result = axios.post(`${apiUrl}/curriculums/${version}/subjects/position`, { id, position });
  console.log(result);
}