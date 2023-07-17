

const subjectsList = document.getElementById('subjects-list');
if (subjectsList) {
  createSubjectsList();
}

const addSubjectButton = document.getElementById('addSubjectButton');
if (addSubjectButton) {
  addSubjectButton.addEventListener('click', async function (e) {
    e.preventDefault();
    sendData('add');
  });
}

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

async function createSubjectsList() {
  const curriculumVersionUuid = localStorage.getItem('curriculumVersionUuid');
  const response = await axios.get(`${apiUrl}/curriculums/${curriculumVersionUuid}/subjects`);
  const subjects = response.data;
  let orderNumber = 0;
  subjects.forEach(subject => {
    if (!subject.data.volume) return;
    orderNumber++;
    const listItem = document.createElement('li');
    listItem.textContent = `${orderNumber}. ${subject.data.id}`;
    listItem.classList.add('list-group-item')
    subjectsList.appendChild(listItem);
  });
}

function createLearningOutcomesList(learningOutcomes) {
  const list = document.getElementById('learning-outcomes-list');
  if (list.hasChildNodes()) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
  if (!learningOutcomes) return;
  learningOutcomes.forEach((outcome, index) => {
    const listItem = document.createElement('li');
    const input = document.createElement('input');
    const button = document.createElement('button');
    input.type = 'text';
    button.textContent = 'Kustuta';
    button.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right');
    input.value = outcome;
    input.classList.add('form-control');
    input.addEventListener('input', (event) => {
      learningOutcomes[index] = event.target.value;
    });
    button.addEventListener('click', function () {
      list.removeChild(listItem);
    });
    listItem.classList.add('list-group-item')
    listItem.appendChild(input);
    listItem.appendChild(button);
    list.appendChild(listItem);
  });
}

const addKeywordButton = document.getElementById('add-keyword-button');

if (addKeywordButton) {
  addKeywordButton.addEventListener('click', function (e) {
    e.preventDefault();
    const keywordInput = document.getElementById('add-keyword-input');
    const keyword = keywordInput.value;
    const keywordsList = document.getElementById('keywords-list');
    const listItem = document.createElement('li');
    listItem.textContent = keyword;
    listItem.classList.add('list-group-item')
    keywordsList.appendChild(listItem);
    keywordInput.value = '';
  });
}

function createKeywordList(keywords) {
  const keywordsList = document.getElementById('keywords-list');
  if (keywordsList.hasChildNodes()) {
    while (keywordsList.firstChild) {
      keywordsList.removeChild(keywordsList.firstChild);
    }
  }
  if (!keywords) return;
  keywords.forEach(keyword => {
    const listItem = document.createElement('li');
    listItem.textContent = keyword;
    listItem.classList.add('list-group-item')
    listItem.addEventListener('click', function (e) {
      searchAndHighlight(e.target.innerText);
    });
    keywordsList.appendChild(listItem);
  });
}


function showSubject(node) {
  const data = node.data();
  console.log(node.data());
  const { uuid, id, volume, category, description, parent, code, learningOutcomes, grading, objectives, keywords } = data;
  let { mandatory } = data;
  createLearningOutcomesList(learningOutcomes);
  createKeywordList(keywords);
  mandatory = mandatory === 'true' ? true : false;
  if (volume) {
    document.getElementById('uuid').innerText = uuid;
    document.getElementById('name').value = id;
    document.getElementById('volume').value = volume;
    document.getElementById('category').value = category;
    document.getElementById('code').value = code;
    document.getElementById('grading').value = grading;
    document.getElementById('description').value = description;
    document.getElementById('objectives').value = objectives;
    document.getElementById('mandatory').checked = mandatory;
    document.getElementById('parent').value = parent;
  }
}

function fillForm(subject) {
  createLearningOutcomesList(subject.learningOutcomes);
  createKeywordList(keywords);
  document.getElementById('uuid').innerText = subject.uuid;
  document.getElementById('code').value = subject.code;
  document.getElementById('name').value = subject.name;
  document.getElementById('volume').value = parseInt(subject.EAP);
  document.getElementById('grading').value = subject.grading;
  document.getElementById('objectives').value = subject.objectives;
  document.getElementById('description').value = subject.description;
  document.getElementById('mandatory').checked = subject.mandatory;
  document.getElementById('uuid').innerText = subject.uuid;
};

function clearForm() {
  createLearningOutcomesList();
  createKeywordList();
  document.getElementById('uuid').innerText = '';
  document.getElementById('code').value = '';
  document.getElementById('name').value = '';
  document.getElementById('volume').value = '';
  document.getElementById('grading').value = '';
  document.getElementById('category').value = '';
  document.getElementById('mandatory').checked = false;
  document.getElementById('parent').value = '';
  document.getElementById('description').value = '';
  document.getElementById('objectives').value = '';
}

function getLearningOutcomesValues() {
  const list = document.getElementById('learning-outcomes-list');
  const learningOutcomes = [];
  if (list.hasChildNodes()) {
    for (let i = 0; i < list.children.length; i++) {
      learningOutcomes.push(list.children[i].firstChild.value);
    }
  }
  return learningOutcomes;
}

function getKeywordsValues() {
  const list = document.getElementById('keywords-list');
  const keywords = [];
  if (list.hasChildNodes()) {
    for (let i = 0; i < list.children.length; i++) {
      keywords.push(list.children[i].innerText);
    }
  }
  return keywords;
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
    learningOutcomes: getLearningOutcomesValues(),
    keywords: getKeywordsValues(),
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