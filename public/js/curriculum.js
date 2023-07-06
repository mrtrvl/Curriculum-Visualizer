const select = document.getElementById('curriculum-select');

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

select.addEventListener('change', function () {
  const versionId = this.value;
  const versionName = this.selectedOptions[0].text;
  localStorage.setItem('curriculumVersionUuid', versionId);
  localStorage.setItem('curriculumVersion', versionName);
  fetchDataAndRenderGraph(versionId);
});
