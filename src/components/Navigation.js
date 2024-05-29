import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        My App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link as={Link} to='/'>
            Welcome
          </Nav.Link>
          <Nav.Link as={Link} to='/counter'>
            Counter
          </Nav.Link>
          <Nav.Link as={Link} to='/login'>
            Login
          </Nav.Link>
          <Nav.Link as={Link} to='/todo'>
            Todo
          </Nav.Link>
          <Nav.Link as={Link} to='/shows'>
            Shows
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;