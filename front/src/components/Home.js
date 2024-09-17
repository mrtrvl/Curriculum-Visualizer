import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import curriculumService from '../services/curriculumService';
import Graph from './Graph';
import './Curriculums.css';

const Home = () => {
  const [curriculumVersions, setCurriculumVersions] = useState([]);
  const [selectedVersion, setSelectedVersion] = useState(localStorage.getItem('curriculumVersionUuid') || '');
  const [curriculum, setCurriculum] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  useEffect(() => {
    async function fetchCurriculumVersions() {
      try {
        const versions = await curriculumService.getCurriculumVersions();
        setCurriculumVersions(versions);

        if (selectedVersion) {
          fetchCurriculum(selectedVersion);
        }
      } catch (error) {
        console.error('Error fetching curriculum versions:', error);
      }
    }

    fetchCurriculumVersions();
  }, [selectedVersion]);

  const fetchCurriculum = async (versionId) => {
    try {
      const curriculumData = await curriculumService.getCurriculum(versionId);
      setCurriculum(curriculumData);
    } catch (error) {
      console.error('Error fetching curriculum:', error);
    }
  };

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedVersion(selectedValue);
    localStorage.setItem('curriculumVersionUuid', selectedValue); // Store selected version in localStorage
    fetchCurriculum(selectedValue);
  };

  const handleSubjectSelect = (subjectData) => {
    setSelectedSubject(subjectData); // Set selected subject when a node is clicked
  };

  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={3}>
          <Card>
            <Card.Header>
              <h2>Õppekavad</h2>
            </Card.Header>
            <Card.Body>
              <Form.Group controlId="curriculum-select">
                <Form.Label><strong>Select Curriculum Version</strong></Form.Label>
                <Form.Control
                  as="select"
                  value={selectedVersion}
                  onChange={handleChange}
                  className="custom-select"
                >
                  <option value="" disabled>Select a version</option>
                  {curriculumVersions.map((version) => (
                    <option key={version.uuid} value={version.uuid}>
                      {version.version} - {version.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Card.Body>
          </Card>
          {selectedSubject && (
            <Card className="mt-4">
              <Card.Header><h3>Subject Details</h3></Card.Header>
              <Card.Body>
                <p><strong>ID:</strong> {selectedSubject.id}</p>
                <p><strong>Code:</strong> {selectedSubject.code}</p>
                <p><strong>Volume:</strong> {selectedSubject.volume}</p>
                <p><strong>Mandatory:</strong> {selectedSubject.mandatory === 'true' ? 'Yes' : 'No'}</p>
                <p><strong>Category:</strong> {selectedSubject.category}</p>
                <p><strong>Parent:</strong> {selectedSubject.parent}</p>
                <p><strong>Grading:</strong> {selectedSubject.grading}</p>
                <p><strong>Objectives:</strong> {selectedSubject.objectives}</p>
                <p><strong>Description:</strong> {selectedSubject.description}</p>
              </Card.Body>
            </Card>
          )}
        </Col>
        <Col md={9}>
          <Card>
            <Card.Header>
              <h2>Graph</h2>
            </Card.Header>
            <Card.Body>
              {curriculum ? (
                <Graph subjects={curriculum.subjects} relations={curriculum.relations} onSubjectSelect={handleSubjectSelect} />
              ) : (
                <p>Please select a curriculum version to display the graph.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
