import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import messi from '../../images/messi.png';
import './Hero.css';
const Hero = () => {
  return (
    <div className='row bg-dark'>
      <Container>
        <Row>
          <div className='d-flex align-items-center'>
            <Col md={6}>
              <h1 className='text-primary '>
                Join The World's most Dedicated Athletes
              </h1>
              <p className='text-white'>
                Here we are presenting you the world's best camps to prepare you
                for competing with the world. We guide you to reach your goal.
                And Be the best with us.
              </p>
            </Col>
            <Col md={6}>
              <img src={messi} alt='' />
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
