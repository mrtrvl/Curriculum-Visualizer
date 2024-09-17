import React, { useState, useEffect } from 'react';
import modulesService from '../services/modulesService';

const Modules = () => {
  const [modules, setModules] = useState([]);
  const [formData, setFormData] = useState({
    uuid: '',
    name: '',
  });

  useEffect(() => {
    fetchModules();
  }, []);

  // Fetch all modules
  const fetchModules = async () => {
    try {
      const modules = await modulesService.getModules();
      setModules(modules);
    } catch (error) {
      console.error('Error fetching modules:', error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Add or update module
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.name) {
        await modulesService.addModule(formData);
        fetchModules();
        clearForm();
      } else {
        alert('Please fill in the module name');
      }
    } catch (error) {
      console.error('Error saving module:', error);
    }
  };

  // Fill form with selected module data for editing
  const fillForm = (module) => {
    setFormData({
      uuid: module.uuid,
      name: module.name,
    });
  };

  // Clear the form after submit or cancel
  const clearForm = () => {
    setFormData({
      uuid: '',
      name: '',
    });
  };

  // Delete module
  const handleDeleteModule = async (uuid) => {
    try {
      await modulesService.deleteModule(uuid);
      fetchModules();
    } catch (error) {
      console.error('Error deleting module:', error);
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
        <div className="col-4">
          <h3>Lisa uus või uuenda</h3>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Mooduli nimi</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Mooduli nimi"
              required
            />
            <button type="submit" className="btn btn-primary mt-2">
              Salvesta
            </button>
            <button
              type="button"
              className="btn btn-secondary mt-2 ms-2"
              onClick={clearForm}
            >
              Tühjenda
            </button>
          </form>
        </div>
        <div className="col-8">
          <h3>Nimekiri</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Mooduli nimi</th>
                <th>Muuda</th>
                <th>Kustuta</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((module, index) => (
                <tr key={index} onClick={() => fillForm(module)}>
                  <td>{index + 1}</td>
                  <td>{module.name}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => fillForm(module)}
                    >
                      Muuda
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteModule(module.uuid)}
                    >
                      Kustuta
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Modules;
