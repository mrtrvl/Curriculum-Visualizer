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

function addNewRelation (id) {
  relation.push(id);
  if (relation.length === 2) {
    document.getElementById("addRelationButton").disabled = false;
    console.log(relation);
    const response = axios.post(`${apiUrl}/curriculums/${version}/relations`, relation);
    addRelation = false;
    console.log(response);
  }
}
