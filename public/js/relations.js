let addRelation = false;
let removeRelation = false;

let relation = [];
document.getElementById("addRelationButton").addEventListener("click", function () {
  document.getElementById("addRelationButton").disabled = true;
  addRelation = true;
});
document.getElementById("removeRelationButton").addEventListener("click", function () {
  document.getElementById("removeRelationButton").disabled = true;
  removeRelation = true;
});

async function addNewRelation (id) {
  relation.push(id);
  if (relation.length === 2) {
    const recommended = document.getElementById("recommended").checked.toString();
    document.getElementById("addRelationButton").disabled = false;
    const relationToAdd = {
      relation,
      recommended,
    }
    const curriculumVersionUuid = localStorage.getItem('curriculumVersionUuid');
    const response = await axios.post(`${apiUrl}/curriculums/${curriculumVersionUuid}/relations`, relationToAdd);
    relation = [];
    addRelation = false;
    fetchDataAndRenderGraph(curriculumVersionUuid);
  }
}

function deleteRelation (id) {
  const curriculumVersionUuid = localStorage.getItem('curriculumVersionUuid');
  const response = axios.delete(`${apiUrl}/curriculums/${curriculumVersionUuid}/relations/${id}`);
  removeRelation = false;
}
