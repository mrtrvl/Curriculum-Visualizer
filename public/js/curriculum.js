const select = document.getElementById('curriculum-select');

function createCurriculumSelect(versions) {
  versions.forEach(version => {
    const option = document.createElement('option');
    option.value = version.uuid;
    option.text = version.version;
    select.appendChild(option);
  });
  versionId = versions[versions.length - 1].uuid;
  fetchDataAndRenderGraph(versionId);
}

select.addEventListener('change', function () {
  const versionId = this.value;
  curriculumVersionUuid = versionId;
  fetchDataAndRenderGraph(versionId);
});
