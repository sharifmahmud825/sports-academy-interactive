import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <div className='row'>
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='#'>Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='ms-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href='/home'>Home</Nav.Link>
              <Nav.Link href='/about'>Link</Nav.Link>
              <Nav.Link href='/camps'>Link</Nav.Link>
              <Nav.Link href='/camps'>Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
