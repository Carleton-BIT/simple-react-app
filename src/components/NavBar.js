// NavBar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ setAuthenticated }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthenticated(false);
    navigate('/login');
  };

  return (
    <Container fluid className="bg-light text-dark">
      <Navbar>
        <Navbar.Brand href="/">Organizer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Tasks</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About the Developer</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
