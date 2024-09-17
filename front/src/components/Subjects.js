import React, { useState, useEffect } from 'react';
import subjectsService from '../services/subjectsService';
import modulesService from '../services/modulesService';

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [formData, setFormData] = useState({
    uuid: '',
    code: '',
    id: '',
    volume: '',
    mandatory: false,
    parent: '',
    category: '',
    grading: '',
    objectives: '',
    description: '',
    learningOutcomes: [],
    keywords: [],
  });
  const [modules, setModules] = useState([]);
  const curriculumVersionUuid = localStorage.getItem('curriculumVersionUuid');

  useEffect(() => {
    if (curriculumVersionUuid) {
      fetchSubjects();
      fetchModules();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curriculumVersionUuid]);

  const handleGetSubjectFromOis = async () => {
    try {
      const subjectData = await subjectsService.getSubjectFromOis(formData.code);
      setFormData({ ...formData, ...subjectData });
    } catch (error) {
      console.error('Error getting subject from ÕIS:', error);
    }
  };


  const fetchSubjects = async () => {
    try {
      const subjects = await subjectsService.getSubjects(curriculumVersionUuid);
      setSubjects(subjects);
    } catch (error) {
      console.error('Error fetching subjects:', error);
    }
  };

  const fetchModules = async () => {
    try {
      const modules = await modulesService.getModules();
      setModules(modules);
    } catch (error) {
      console.error('Error fetching modules:', error);
    }
  };

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await subjectsService.saveSubject(curriculumVersionUuid, formData);
      fetchSubjects();
      clearForm();
    } catch (error) {
      console.error('Error saving subject:', error);
    }
  };

  const handleDeleteSubject = async (uuid, e) => {
    e.stopPropagation(); // Prevent the row click event from firing
    try {
      await subjectsService.deleteSubject(curriculumVersionUuid, uuid);
      fetchSubjects();
    } catch (error) {
      console.error('Error deleting subject:', error);
    }
  };

  const fillForm = (subject) => {
    setFormData({
      uuid: subject.uuid,
      code: subject.code,
      id: subject.id,
      volume: subject.volume,
      mandatory: subject.mandatory === 'true',
      parent: subject.parent,
      category: subject.category,
      grading: subject.grading,
      objectives: subject.objectives,
      description: subject.description,
      learningOutcomes: subject.learningOutcomes || [],
      keywords: subject.keywords || [],
    });
  };

  const clearForm = () => {
    setFormData({
      uuid: '',
      code: '',
      id: '',
      volume: '',
      mandatory: false,
      parent: '',
      category: '',
      grading: '',
      objectives: '',
      description: '',
      learningOutcomes: [],
      keywords: [],
    });
  };

  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-12 text-center">
          <h1>Õppeained</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <h3>Lisa uus või uuenda</h3>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="code">Õppeaine kood</label>
            <input
              type="text"
              id="code"
              value={formData.code}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Õppeaine kood"
              required
            />
            <button type="button" className="btn btn-primary btn-sm mt-2 mb-2" onClick={() => handleGetSubjectFromOis()}>
              Võta andmed ÕISist
            </button>
            <br />
            <label htmlFor="id">Õppeaine nimi</label>
            <input
              type="text"
              id="id"
              value={formData.id}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Õppeaine nimi"
              required
            />
            <label htmlFor="volume">Aine maht EAP-des</label>
            <input
              type="number"
              id="volume"
              value={formData.volume}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Aine maht EAP-des"
              required
            />
            <div className="form-check">
              <input
                type="checkbox"
                id="mandatory"
                checked={formData.mandatory}
                onChange={handleInputChange}
                className="form-check-input"
              />
              <label htmlFor="mandatory" className="form-check-label">
                Kohustuslik aine
              </label>
            </div>
            <label htmlFor="parent">Semester</label>
            <select
              id="parent"
              value={formData.parent}
              onChange={handleInputChange}
              className="form-control"
              required
            >
              <option value="">Vali semester</option>
              <option value="1. semester">1. semester</option>
              <option value="2. semester">2. semester</option>
              <option value="3. semester">3. semester</option>
              <option value="4. semester">4. semester</option>
              <option value="5. semester">5. semester</option>
              <option value="6. semester">6. semester</option>
            </select>
            <label htmlFor="category">Moodul</label>
            <select
              id="category"
              value={formData.category}
              onChange={handleInputChange}
              className="form-control"
              required
            >
              <option value="">Vali moodul</option>
              {modules.map((module, index) => (
                <option key={index} value={module.name}>
                  {module.name}
                </option>
              ))}
            </select>
            <label htmlFor="grading">Hindamisvorm</label>
            <input
              type="text"
              id="grading"
              value={formData.grading}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Hindamisvorm"
            />
            <label htmlFor="objectives">Eesmärgid</label>
            <textarea
              id="objectives"
              value={formData.objectives}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Eesmärgid"
            />
            <label htmlFor="description">Kirjeldus</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Kirjeldus"
            />
            <button type="submit" className="btn btn-primary mt-2">
              Salvesta
            </button>
          </form>
        </div>
        <div className="col-8">
          <h3>Nimekiri</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Nimetus</th>
                <th>Moodul</th>
                <th>Semester</th>
                <th>Kustuta</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr key={index} onClick={() => fillForm(subject.data)}>
                  <td>{index + 1}</td>
                  <td>{subject.data.id}</td>
                  <td>{subject.data.category}</td>
                  <td>{subject.data.parent}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={(e) => handleDeleteSubject(subject.data.uuid, e)}
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

export default Subjects;
