import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/sports-logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className='row'>
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='#' className='logo'>
            <img src={logo} alt='' className='w-25 ' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='ms-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to='/home'>
                <Nav.Link className='nav' href='/home'>
                  Home
                </Nav.Link>
              </Link>
              <Link to='/about'>
                <Nav.Link className='nav' href='/about'>
                  About
                </Nav.Link>
              </Link>
              <Link to='/camps'>
                <Nav.Link className='nav' href='/camps'>
                  Camps
                </Nav.Link>
              </Link>
              <Link to='/contact'>
                <Nav.Link className='nav' href='/contact'>
                  Contact US
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
