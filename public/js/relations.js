let addRelation = false;
let relation = [];
document.getElementById("addRelationButton").addEventListener("click", function () {
  document.getElementById("addRelationButton").disabled = true;
  addRelation = true;
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

function removeRelation (id) {
/*   const response = axios.delete(`${apiUrl}/curriculums/${version}/relations/${id}`);
  console.log(response); */
}
