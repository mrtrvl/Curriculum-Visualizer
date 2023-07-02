const version = 'RIF23';

document.getElementById('add-subject-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const subjectData = {
    id: document.getElementById('name').value,
    volume: Number(document.getElementById('volume').value),
    category: document.getElementById('category').value,
    description: document.getElementById('description').value,
    mandatory: document.getElementById('mandatory').checked.toString(),
    semester: Number(document.getElementById('semester').value),
  };
  try {
    const response = await axios.post(`${apiUrl}/curriculums/${version}/subjects`, subjectData);
    if (!response) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const newSubject = await response.data;
    console.log(newSubject);
    cy.add({
      data: {
        id: newSubject.id,
        volume: newSubject.volume,
        description: newSubject.description,
        category: newSubject.category,
        mandatory: newSubject.mandatory,
        semester: newSubject.semester,
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
});