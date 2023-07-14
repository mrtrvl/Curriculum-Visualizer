document.getElementById('addSubject').addEventListener('click', async function (e) {
  e.preventDefault();
  sendData('add');
});

const updateSubject = document.getElementById('updateSubject');
if (updateSubject) {
  updateSubject.addEventListener('click', async function (e) {
    e.preventDefault();
    sendData('update');
  });
}

const getSubjectButton = document.getElementById('getSubjectButton');
if (getSubjectButton) {
  getSubjectButton.addEventListener('click', async function (e) {
    e.preventDefault();
    getSubjectFromOis();
  });
}

function createLearningOutcomesList(learningOutcomes) {
  if(!learningOutcomes) return;
  let list = '';
  learningOutcomes.forEach((outcome) => {
    list += `${outcome}\n`;
  });
  console.log(list);
  return list;
}

function showSubject(node) {
  const data = node.data();
  console.log(node.data());
  const { id, volume, category, description, parent, uuid, code, learningOutcomes, grading, objectives } = data;
  let { mandatory } = data;
  const outcomes = createLearningOutcomesList(learningOutcomes);
  mandatory = mandatory === 'true' ? true : false;
  if (volume) {
    document.getElementById('name').value = id;
    document.getElementById('volume').value = volume;
    document.getElementById('category').value = category;
    document.getElementById('description').value = description;
    document.getElementById('code').value = code;
    document.getElementById('learningOutcomes').innerHTML = outcomes;
    document.getElementById('grading').value = grading;
    document.getElementById('objectives').value = objectives;
    document.getElementById('mandatory').checked = mandatory;
    document.getElementById('parent').value = parent;
    document.getElementById('uuid').innerText = uuid;
  }
}

function fillForm(subject) {
  document.getElementById('code').value = subject.code;
  document.getElementById('name').value = subject.name;
  document.getElementById('volume').value = parseInt(subject.EAP);
  document.getElementById('grading').value = subject.grading;
  document.getElementById('objectives').value = subject.objectives;
  document.getElementById('learningOutcomes').value = subject.learningOutcomes;
  document.getElementById('description').value = subject.description;
  document.getElementById('mandatory').checked = subject.mandatory;
  document.getElementById('uuid').innerText = subject.uuid;
};

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
  const curriculumVersionUuid = localStorage.getItem('curriculumVersionUuid');
  const subjectData = {
    id: document.getElementById('name').value,
    code: document.getElementById('code').value,
    volume: Number(document.getElementById('volume').value),
    category: document.getElementById('category').value,
    grading: document.getElementById('grading').value,
    objectives: document.getElementById('objectives').value,
    learningOutcomes: document.getElementById('learningOutcomes').value,
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

async function getSubjectFromOis() {
  const subjectId = document.getElementById('code').value;
  try {
    const response = await axios.get(`${apiUrl}/scrape/${subjectId}`);
    console.log(response);
    if (!response) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const subject = await response.data;
    fillForm(subject);
  } catch (error) {
    console.error('Error:', error);
  }
}