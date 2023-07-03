const version = 'RIF23';

document.getElementById('addSubject').addEventListener('click', async function(e) {
  e.preventDefault();
  sendData('add');
});

document.getElementById('updateSubject').addEventListener('click', async function(e) {
  e.preventDefault();
  sendData('update');
});

async function sendData(action) {
  const subjectData = {
    id: document.getElementById('name').value,
    volume: Number(document.getElementById('volume').value),
    category: document.getElementById('category').value,
    description: document.getElementById('description').value,
    mandatory: document.getElementById('mandatory').checked.toString(),
    parent: document.getElementById('parent').value,
  };
  const uuid = document.getElementById('uuid').innerText;
  console.log(subjectData);
  try {
    if (subjectData.id &&
        subjectData.volume &&
        subjectData.category &&
        subjectData.parent) {
      let response = null;
      if (action === 'add') {
        response = await axios.post(`${apiUrl}/curriculums/${curriculumVersionUuid}/subjects`, subjectData);
      } else {
        response = await axios.put(`${apiUrl}/curriculums/${curriculumVersionUuid}/subjects/${uuid}`, subjectData);
      }
      console.log(response);
      if (!response) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const newSubject = await response.data;
      cy.add({
        data: {
          id: newSubject.id,
          volume: newSubject.volume,
          description: newSubject.description,
          category: newSubject.category,
          mandatory: newSubject.mandatory,
          parent: newSubject.parent,
        }
      });
    } else {
      alert('Please fill in all the fields!');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}