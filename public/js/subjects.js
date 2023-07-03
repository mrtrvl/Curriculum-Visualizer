document.getElementById('addSubject').addEventListener('click', async function(e) {
  e.preventDefault();
  sendData('add');
});

document.getElementById('updateSubject').addEventListener('click', async function(e) {
  e.preventDefault();
  sendData('update');
});

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('volume').value = '';
  document.getElementById('category').value = '';
  document.getElementById('description').value = '';
  document.getElementById('mandatory').checked = false;
  document.getElementById('parent').value = '';
  document.getElementById('uuid').innerText = '';
}

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
      } else {
        clearForm();
      }
      const newSubject = await response.data;
      console.log(response.data);
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
      fetchDataAndRenderGraph(curriculumVersionUuid);
    } else {
      alert('Please fill in all the fields!');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}