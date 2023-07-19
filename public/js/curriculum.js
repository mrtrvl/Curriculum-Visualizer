window.onload = () => {
  updateVersionNameOnMenu();
}

const select = document.getElementById('curriculum-select');
const addCurriculumButton = document.getElementById('add-curriculum-button');
const displayCurriculumVersionName = document.getElementById('curriculum-version-name');
const curriculumsList = document.getElementById('curriculums-list');

if (curriculumsList) {
  createCurriculumsList();
}

if (addCurriculumButton) {
  addCurriculumButton.addEventListener('click', (e) => {
    e.preventDefault();
    addCurriculum();
  });
}

function updateVersionNameOnMenu() {
  const versionName = localStorage.getItem('curriculumVersion');
  displayCurriculumVersionName.innerText = versionName;
}

async function createCurriculumsList() {
  if (curriculumsList.hasChildNodes()) {
    while (curriculumsList.firstChild) {
      curriculumsList.removeChild(curriculumsList.firstChild);
    }
  }
  const response = await axios.get(`${apiUrl}/curriculums/versions`);
  const versions = response.data;
  versions.forEach(version => {
    const listItem = document.createElement('li');
    listItem.textContent = `${version.version} - ${version.name}`;
    listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    const buttonDiv = document.createElement('div');
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Tee koopia';
    copyButton.classList.add('btn', 'btn-secondary', 'ml-2');
    copyButton.onclick = function () {
      copyCurriculum(version.uuid, version.version);
    };
    buttonDiv.appendChild(copyButton);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Kustuta';
    deleteButton.classList.add('btn', 'btn-danger', 'ml-2');
    deleteButton.onclick = function () {
      deleteCurriculum(version.uuid, version.version);
    };
    buttonDiv.appendChild(deleteButton);
    listItem.appendChild(buttonDiv);
    curriculumsList.appendChild(listItem);
  });
}

function createCurriculumSelect(versions) {
  versions.forEach(version => {
    const option = document.createElement('option');
    option.value = version.uuid;
    option.text = version.version;
    select.appendChild(option);
  });
  let versionId = localStorage.getItem('curriculumVersionUuid');
  if (!versionId) {
    versionId = versions[versions.length - 1].uuid;
    select.options[select.options.length - 1].selected = true;
    curriculumVersionUuid = versionId;
    localStorage.setItem('curriculumVersionUuid', versionId);
  } else {
    select.value = versionId;
  }
  updateVersionNameOnMenu()
  fetchDataAndRenderGraph(versionId);
}

if (select) {
  select.addEventListener('change', function () {
    const versionId = this.value;
    const versionName = this.selectedOptions[0].text;
    localStorage.setItem('curriculumVersionUuid', versionId);
    localStorage.setItem('curriculumVersion', versionName);
    updateVersionNameOnMenu()
    fetchDataAndRenderGraph(versionId);
  });
}

async function addCurriculum() {
  const newCurriculum = {};
  newCurriculum.name = document.getElementById('curriculum-name').value;
  newCurriculum.version = document.getElementById('curriculum-version').value;
  newCurriculum.semesterCount = document.getElementById('curriculum-semester-count').value;
  console.log(newCurriculum);
  const response = await axios.post(`${apiUrl}/curriculums`, newCurriculum);
  if (response.status === 201) {
    alert('Õppekava lisamine õnnestus!');
    emptyCurriculumForm();
    createCurriculumsList();
  }
}

function emptyCurriculumForm() {
  document.getElementById('curriculum-name').value = '';
  document.getElementById('curriculum-version').value = '';
  document.getElementById('curriculum-semester-count').value = '';
}

async function copyCurriculum(uuid, version) {
  const newVersion = prompt('Sisesta uue versiooni nimi', version);
  if (!newVersion) return;
  if (newVersion === version) {
    alert('Uus versioon peab erinema olemasolevast!');
    return;
  }
  const response = await axios.post(`${apiUrl}/curriculums/copy`, { uuid, version: newVersion });
  if (response.status === 201) {
    alert('Õppekava versiooni koopia loomine õnnestus!');
    createCurriculumsList();
  } else {
    alert('Õppekava versiooni koopia loomine ebaõnnestus!');
  }
}

async function deleteCurriculum(uuid, version) {
  const confirmed = confirm(`Kas oled kindel, et soovid õppekava ${version} kustutada?`);
  if (!confirmed) return;
  const response = await axios.delete(`${apiUrl}/curriculums/${uuid}`);
  if (response.status === 200) {
    alert('Õppekava versiooni kustutamine õnnestus!');
    createCurriculumsList();
  }
}