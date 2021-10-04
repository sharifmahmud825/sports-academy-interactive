import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import logo from '../../images/sports-logo.png';

const Footer = () => {
  return (
    <div className='bg-dark p-4'>
      <Row>
        <Container>
          <div className='d-flex justify-content-center align-items-center'>
            <Col md={4}>
              <img src={logo} alt='' />
            </Col>
            <Col md={4}>
              <Nav defaultActiveKey='/home' className='flex-column'>
                <Nav.Link href='/home'>Home</Nav.Link>
                <Nav.Link eventKey='link-1'>About</Nav.Link>
                <Nav.Link eventKey='link-2'>Camps</Nav.Link>
                <Nav.Link eventKey='link-3'>Contact</Nav.Link>
              </Nav>
            </Col>
            <Col md={4}>
              <span>
                <i class='fab fa-facebook text-white me-3 fs-3'></i>
              </span>
              <span>
                <i class='fab fa-instagram text-white me-3 fs-3'></i>
              </span>
              <span>
                <i class='fab fa-linkedin text-white me-3 fs-3'></i>
              </span>
              <p className='text-white'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                veniam dolor vel cupiditate laudantium ut delectus sequi
                dignissimos ex excepturi?
              </p>
            </Col>
          </div>
        </Container>
      </Row>
    </div>
  );
};

export default Footer;
