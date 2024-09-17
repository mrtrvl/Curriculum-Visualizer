import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, ListGroup } from 'react-bootstrap';
import curriculumService from '../services/curriculumService';

const Curriculums = () => {
  const [curriculums, setCurriculums] = useState([]);
  const [newCurriculum, setNewCurriculum] = useState({ name: '', version: '', semesterCount: '' });
  const [selectedVersion, setSelectedVersion] = useState('');

  useEffect(() => {
    fetchCurriculums();
    updateVersionNameOnMenu();
  }, []);

  const fetchCurriculums = async () => {
    const data = await curriculumService.getCurriculumVersions();
    setCurriculums(data);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewCurriculum((prevCurriculum) => ({
      ...prevCurriculum,
      [id]: value,
    }));
  };

  const handleAddCurriculum = async (e) => {
    e.preventDefault();
    if (!newCurriculum.name || !newCurriculum.version || !newCurriculum.semesterCount) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await curriculumService.addCurriculum(newCurriculum);
      alert('Curriculum added successfully');
      setNewCurriculum({ name: '', version: '', semesterCount: '' });
      fetchCurriculums();
    } catch (error) {
      alert('Failed to add curriculum');
    }
  };

  const handleDeleteCurriculum = async (uuid, version) => {
    const confirmed = window.confirm(`Are you sure you want to delete the curriculum ${version}?`);
    if (!confirmed) return;

    try {
      await curriculumService.deleteCurriculum(uuid);
      alert('Curriculum deleted successfully');
      fetchCurriculums();
    } catch (error) {
      alert('Failed to delete curriculum');
    }
  };

  const handleCopyCurriculum = async (uuid, version) => {
    const newVersion = prompt('Enter a new version name', version);
    if (!newVersion || newVersion === version) {
      alert('New version must differ from the existing one!');
      return;
    }

    try {
      await curriculumService.copyCurriculum(uuid, newVersion);
      alert('Curriculum version copied successfully');
      fetchCurriculums();
    } catch (error) {
      alert('Failed to copy curriculum');
    }
  };

  const updateVersionNameOnMenu = () => {
    const versionName = localStorage.getItem('curriculumVersion');
    if (versionName) {
      setSelectedVersion(versionName);
    }
  };

  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={6}>
          <h3>Lisa uus õppekava versioon</h3>
          <Form onSubmit={handleAddCurriculum}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                id="version"
                placeholder="Curriculum Code"
                value={newCurriculum.version}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                id="name"
                placeholder="Curriculum Name"
                value={newCurriculum.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                id="semesterCount"
                placeholder="Number of Semesters"
                value={newCurriculum.semesterCount}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Lisa uus õppekava
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <h3>Õppekavade nimekiri</h3>
          <ListGroup>
            {curriculums.map((curriculum) => (
              <ListGroup.Item
                key={curriculum.uuid}
                className="d-flex justify-content-between align-items-center"
              >
                {curriculum.version} - {curriculum.name}
                <div>
                  <Button
                    variant="secondary"
                    className="btn-sm ml-2"
                    onClick={() => handleCopyCurriculum(curriculum.uuid, curriculum.version)}
                  >
                    Copy
                  </Button>
                  <Button
                    variant="danger"
                    className="btn-sm ml-2"
                    onClick={() => handleDeleteCurriculum(curriculum.uuid, curriculum.version)}
                  >
                    Delete
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Curriculums;
