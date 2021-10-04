import React from 'react';
import { Col, Container, ListGroup, Nav, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <Row>
        <Container>
          <div className='d-flex'>
            <Col md={4}>
              <h1>Logo</h1>
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
                <i class='fab fa-facebook'></i>
              </span>
              <span>
                <i class='fab fa-facebook'></i>
              </span>
              <span>
                <i class='fab fa-facebook'></i>
              </span>
              <span>
                <i class='fab fa-facebook'></i>
              </span>
            </Col>
          </div>
        </Container>
      </Row>
    </div>
  );
};

export default Footer;
