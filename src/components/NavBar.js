import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
  return (
      <Container fluid className="bg-light text-dark">
      <Navbar >
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
        </Navbar.Collapse>
      </Navbar>
      </Container>
  );
};

export default NavBar;
