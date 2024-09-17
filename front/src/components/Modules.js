import React, { useState, useEffect } from 'react';
import modulesService from '../services/modulesService'; // Import the service

const Modules = () => {
  const [modules, setModules] = useState([]);
  const [moduleName, setModuleName] = useState('');
  const [editingModuleId, setEditingModuleId] = useState(null); // Track the module being edited
  const [editedModuleName, setEditedModuleName] = useState(''); // Track the new name for the module being edited

  // Fetch the modules when the component loads
  useEffect(() => {
    fetchModules();
  }, []);

  // Function to fetch modules and update the state
  const fetchModules = async () => {
    try {
      const modules = await modulesService.getModules();
      setModules(modules);
    } catch (error) {
      console.error('Error fetching modules:', error);
    }
  };

  // Function to handle adding a new module
  const handleAddModule = async (e) => {
    e.preventDefault();

    if (!moduleName.trim()) {
      alert('Module name is required!');
      return;
    }

    const module = { name: moduleName };
    try {
      const newModule = await modulesService.addModule(module);
      setModuleName(''); // Clear input after successful addition
      setModules([...modules, newModule]); // Add new module to the list
    } catch (error) {
      alert('Error adding module');
      console.error('Error adding module:', error);
    }
  };

  // Function to handle deleting a module
  const handleDeleteModule = async (id) => {
    try {
      await modulesService.deleteModule(id);
      setModules(modules.filter(module => module.uuid !== id)); // Remove the deleted module from the list
    } catch (error) {
      alert('Error deleting module');
      console.error('Error deleting module:', error);
    }
  };

  // Function to handle editing a module
  const handleEditModule = (module) => {
    setEditingModuleId(module.uuid); // Set the module ID that is being edited
    setEditedModuleName(module.name); // Set the current name of the module in the input
  };

  // Function to save the edited module
  const handleSaveModule = async (id) => {
    if (!editedModuleName.trim()) {
      alert('Module name is required!');
      return;
    }

    const updatedModule = { uuid: id, name: editedModuleName };

    try {
      const updated = await modulesService.updateModule(updatedModule);
      setModules(modules.map(module => (module.uuid === id ? updated : module))); // Update the module in the list
      setEditingModuleId(null); // Exit edit mode
    } catch (error) {
      alert('Error updating module');
      console.error('Error updating module:', error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-12 text-center">
          <h1>Moodulid</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <h3>Lisa uus</h3>
          <form onSubmit={handleAddModule}>
            <input
              className="form-control me-2"
              type="text"
              id="module-name"
              placeholder="Mooduli nimi"
              value={moduleName}
              onChange={(e) => setModuleName(e.target.value)}
              required
            />
            <button className="btn btn-primary mt-2" type="submit">Lisa</button>
          </form>
        </div>

        <div className="col-6">
          <h3>Nimekiri</h3>
          <ul className="list-group" id="modules-list">
            {modules.map(module => (
              <li key={module.uuid} className="list-group-item d-flex justify-content-between align-items-center">
                {editingModuleId === module.uuid ? (
                  <input
                    className="form-control me-2"
                    type="text"
                    value={editedModuleName}
                    onChange={(e) => setEditedModuleName(e.target.value)}
                  />
                ) : (
                  <span>{module.name}</span>
                )}

                <div className="btn-group" role="group">
                  {editingModuleId === module.uuid ? (
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleSaveModule(module.uuid)}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleEditModule(module)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm ms-2" // Adds margin between Edit and Delete
                        onClick={() => handleDeleteModule(module.uuid)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modules;
