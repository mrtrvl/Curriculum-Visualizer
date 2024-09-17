import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import LogoutButton from './LogoutButton';

const NavBar = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Õppekava
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Avaleht</Nav.Link>
            <Nav.Link href="/curriculums">Õppekavad</Nav.Link>
            <Nav.Link href="/modules">Moodulid</Nav.Link>
            <Nav.Link href="/subjects">Õppeained</Nav.Link>
          </Nav>
          {/*           <Nav className="ms-auto">
            {user ? (
              <>
                <Navbar.Text className="me-3">
                  Signed in as: {user.username}
                </Navbar.Text>
                <LogoutButton onLogout={onLogout} />
              </>
            ) : (
              <Button href={`${config.baseUrl}/auth/github`} variant="primary">
                Login with GitHub
              </Button>
            )}
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;