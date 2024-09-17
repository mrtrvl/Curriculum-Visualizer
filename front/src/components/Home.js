import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import curriculumService from '../services/curriculumService';
import Graph from './Graph';
import './Curriculums.css';

const Home = () => {
  const [curriculumVersions, setCurriculumVersions] = useState([]);
  const [selectedVersion, setSelectedVersion] = useState(localStorage.getItem('curriculumVersionUuid') || '');
  const [curriculum, setCurriculum] = useState(null);

  useEffect(() => {
    async function fetchCurriculumVersions() {
      const versions = await curriculumService.getCurriculumVersions();
      setCurriculumVersions(versions);

      if (selectedVersion) {
        fetchCurriculum(selectedVersion);
      }
    }

    fetchCurriculumVersions();
  }, [selectedVersion]);

  async function fetchCurriculum(versionId) {
    try {
      const curriculumData = await curriculumService.getCurriculum(versionId);
      setCurriculum(curriculumData);
    } catch (error) {
      console.error('Error fetching curriculum:', error);
    }
  }

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedVersion(selectedValue);
    localStorage.setItem('curriculumVersionUuid', selectedValue); // Store selected version in localStorage
    fetchCurriculum(selectedValue);
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
                  style={{
                    backgroundColor: '#f8f9fa',
                    border: '2px solid #007bff',
                    borderRadius: '4px',
                    padding: '10px',
                    fontSize: '1.1rem',
                    color: '#007bff',
                    appearance: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="" disabled>Select a version</option>
                  {curriculumVersions.map((version) => (
                    <option key={version.uuid} value={version.uuid}>
                      {version.version}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <Card>
            <Card.Header>
              <h2>Graph</h2>
            </Card.Header>
            <Card.Body>
              {curriculum && (
                <Graph subjects={curriculum.subjects} relations={curriculum.relations} />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
