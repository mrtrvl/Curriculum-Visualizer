const select = document.getElementById('curriculum-select');

function createCurriculumSelect(versions) {
  versions.forEach(version => {
    const option = document.createElement('option');
    option.value = version.uuid;
    option.text = version.version;
    select.appendChild(option);
  });
}

select.addEventListener('change', function () {
  const versionId = this.value;
  curriculumVersionUuid = versionId;
  fetchDataAndRenderGraph(versionId);
});
