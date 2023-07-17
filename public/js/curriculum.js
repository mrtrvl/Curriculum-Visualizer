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
  if(curriculumsList.hasChildNodes()) {
    while (curriculumsList.firstChild) {
      curriculumsList.removeChild(curriculumsList.firstChild);
    }
  }
  const response = await axios.get(`${apiUrl}/curriculums/versions`);
  const versions = response.data;
  versions.forEach(version => {
    const listItem = document.createElement('li');
    listItem.textContent = version.version;
    listItem.classList.add('list-group-item')
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