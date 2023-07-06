const select = document.getElementById('curriculum-select');
const addCurriculumButton = document.getElementById('add-curriculum-button');

if (addCurriculumButton) {
  addCurriculumButton.addEventListener('click', (e) => {
    e.preventDefault();
    addCurriculum();
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
  fetchDataAndRenderGraph(versionId);
}

if (select) {
  select.addEventListener('change', function () {
    const versionId = this.value;
    const versionName = this.selectedOptions[0].text;
    localStorage.setItem('curriculumVersionUuid', versionId);
    localStorage.setItem('curriculumVersion', versionName);
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
  }
}

function emptyCurriculumForm() {
  document.getElementById('curriculum-name').value = '';
  document.getElementById('curriculum-version').value = '';
  document.getElementById('curriculum-semester-count').value = '';
}