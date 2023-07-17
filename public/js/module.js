const modulesList = document.getElementById('modules-list');

if (modulesList) {
  if (modulesList.hasChildNodes()) {
    while (modulesList.firstChild) {
      modulesList.removeChild(list.firstChild);
    }
  }
  createModulesList();
}

async function createModulesList() {
  const response = await axios.get(`${apiUrl}/modules`);
  const modules = response.data;
  modules.forEach(module => {
    const listItem = document.createElement('li');
    listItem.innerText = module.name;
    listItem.classList.add('list-group-item')
    modulesList.appendChild(listItem);
  });
}

const addModuleButton = document.getElementById('add-module-button');
addModuleButton.addEventListener('click', async function (e) {
  e.preventDefault();
  const moduleNameInput = document.getElementById('module-name');
  const moduleName = moduleNameInput.value;
  const module = { name: moduleName }
  const response = await axios.post(`${apiUrl}/modules`, { module });
  console.log(response);
  if (response.status === 201) {
    alert('Mooduli lisamine õnnestus!');
    moduleNameInput.value = '';
    createModulesList();
  } else {
    alert('Mooduli lisamine ebaõnnestus!');
  }
});

