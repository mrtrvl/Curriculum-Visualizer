const subjectsList = document.getElementById('subjects-list');
if (subjectsList) {
  createSubjectsList();
}

const subjectsTable = document.getElementById('subjects-table-body');
if (subjectsTable) {
  createSubjectsTable();
}

const addSubjectButton = document.getElementById('addSubjectButton');
if (addSubjectButton) {
  addSubjectButton.addEventListener('click', async function (e) {
    e.preventDefault();
    sendData();
  });
}

const updateSubject = document.getElementById('updateSubject');
if (updateSubject) {
  updateSubject.addEventListener('click', async function (e) {
    e.preventDefault();
    sendData('update');
  });
}

const getSubjectButton = document.getElementById('getSubjectFromOisButton');
if (getSubjectButton) {
  getSubjectButton.addEventListener('click', async function (e) {
    e.preventDefault();
    getSubjectFromOis();
  });
}

async function deleteSubject(uuid) {
  const curriculumVersionUuid = localStorage.getItem('curriculumVersionUuid');
  const confirmed = confirm(`Kas oled kindel, et soovid õppeaine ${name} kustutada?`);
  if (!confirmed) return;
  const response = await axios.delete(`${apiUrl}/curriculums/${curriculumVersionUuid}/subjects/${uuid}`);
  if (response.status === 200) {
    alert('Õppeaine kustutamine õnnestus!');
    createSubjectsTable();
  } else {
    alert('Õppeaine kustutamine ebaõnnestus!');
  }
}

async function createSubjectsTable() {
  const curriculumVersionUuid = localStorage.getItem('curriculumVersionUuid');
  const response = await axios.get(`${apiUrl}/curriculums/${curriculumVersionUuid}/subjects`);
  const subjects = response.data;
  let orderNumber = 0;
  subjects.forEach(subject => {
    if (!subject.data.volume) return;
    orderNumber++;
    const tr = document.createElement('tr');
    tr.addEventListener('click', function () {
      fillForm(subject.data);
    });
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    const button = document.createElement('button');
    button.textContent = 'Kustuta';
    button.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right');
    button.addEventListener('click', function () {
      deleteSubject(subject.data.uuid);
    });
    td1.textContent = orderNumber;
    td2.textContent = `${subject.data.id}`;
    td3.textContent = `${subject.data.category}`;
    td4.textContent = `${subject.data.parent}`;
    td5.appendChild(button);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    subjectsTable.appendChild(tr);
  });
  let table = new DataTable('#subjects-table', {
    "paging": false,
    "columnDefs": [
      { "orderable": false, "targets": 0 } // disable ordering on the first column (0-based index)
    ],
    "order": [[1, 'asc']] // initial order will be on the second column
  });
  table.on('order.dt search.dt', function () {
    table.column(0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
      cell.innerHTML = i + 1;
    });
  }).draw();
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
    listItem.textContent = `${orderNumber}. ${subject.data.id} - ${subject.data.category}`;
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
  if (data.volume) {
    fillForm(data);
  }
}

function fillForm(subject) {
  mandatory = subject.mandatory === 'true' ? true : false;
  if (subject.learningOutcomes && subject.learningOutcomes.length > 0) {
    createLearningOutcomesList(subject.learningOutcomes);
  }
  if (subject.keywirds && subject.keywords.length > 0) {
    createKeywordList(subject.keywords)
  };
  document.getElementById('uuid').innerText = subject.uuid;
  document.getElementById('code').value = subject.code;
  document.getElementById('name').value = subject.id;
  document.getElementById('volume').value = parseInt(subject.volume);
  document.getElementById('mandatory').checked = mandatory;
  document.getElementById('parent').value = subject.parent;
  document.getElementById('category').value = subject.category;
  document.getElementById('grading').value = subject.grading;
  document.getElementById('objectives').value = subject.objectives;
  document.getElementById('description').value = subject.description;
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

function getDataFromForm() {
  const subjectData = {
    uuid: document.getElementById('uuid').innerText,
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
  return subjectData;
}


async function sendData() {
  const curriculumVersionUuid = localStorage.getItem('curriculumVersionUuid');
  const subjectData = getDataFromForm();
  console.log(subjectData);
  try {
    if (subjectData.id &&
      subjectData.volume &&
      subjectData.category &&
      subjectData.parent) {
      let response = null;
      if (!subjectData.uuid || subjectData.uuid === 'undefined') {
        console.log(subjectData.uuid, 'post');
        response = await axios.post(`${apiUrl}/curriculums/${curriculumVersionUuid}/subjects`, subjectData);
      } else {
        console.log(subjectData.uuid, 'put');
        response = await axios.put(`${apiUrl}/curriculums/${curriculumVersionUuid}/subjects/${subjectData.uuid}`, subjectData);
      }
      console.log(response);
      if (!response) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        clearForm();
      }
      const newSubject = await response.data;
      if (cy) {
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
      }
    } else {
      alert('Palun kontrolli üle, et kõik väljad oleksid täidetud.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function getSubjectFromOis() {
  const subjectId = document.getElementById('code').value;
  try {
    const existingSubject = getDataFromForm();
    const response = await axios.get(`${apiUrl}/scrape/${subjectId}`);
    console.log(response);
    if (!response) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const subject = await response.data;
    if (existingSubject.uuid) {
      existingSubject.volume = subject.volume;
      existingSubject.grading = subject.grading;
      existingSubject.objectives = subject.objectives;
      existingSubject.description = subject.description;
      if (existingSubject.learningOutcomes.length < 1) {
        existingSubject.learningOutcomes = subject.learningOutcomes;
      }
      fillForm(existingSubject);
    } else {
      fillForm(subject);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

