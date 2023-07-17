const modulesList = document.getElementById('modules-list');
const modulesSelect = document.getElementById('category');

if (modulesList) {
  createModulesList();
}

if (modulesSelect) {
  createModuleSelect();
}

async function createModulesList() {
  if (modulesList.hasChildNodes()) {
    while (modulesList.firstChild) {
      modulesList.removeChild(modulesList.firstChild);
    }
  }
  const response = await axios.get(`${apiUrl}/modules`);
  const modules = response.data;
  modules.forEach(module => {
    const listItem = document.createElement('li');
    listItem.innerText = module.name;
    listItem.classList.add('list-group-item')
    modulesList.appendChild(listItem);
  });
}

async function createModuleSelect() {
  const response = await axios.get(`${apiUrl}/modules`);
  const modules = response.data;
  modules.forEach(module => {
    const option = document.createElement('option');
    option.value = module.name;
    option.innerText = module.name;
    modulesSelect.appendChild(option);
  });
}

const addModuleButton = document.getElementById('add-module-button');

if (addModuleButton) {
  addModuleButton.addEventListener('click', async function (e) {
    e.preventDefault();
    const moduleNameInput = document.getElementById('module-name');
    const moduleName = moduleNameInput.value;
    const module = { name: moduleName }
    const response = await axios.post(`${apiUrl}/modules`, { module });
    if (response.status === 201) {
      moduleNameInput.value = '';
      createModulesList();
    } else {
      alert('Mooduli lisamine ebaõnnestus!');
    }
  });  
}

