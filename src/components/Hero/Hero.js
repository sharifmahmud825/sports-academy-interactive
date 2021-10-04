import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import messi from '../../images/messi.png';
import './Hero.css';
const Hero = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='heading'>
              <h1 className='text-primary text-start'>
                Join The World's most Dedicated Athletes
              </h1>
              <h6 className='text-start'>
                Here we are presenting you the world's best camps to prepare you
                for competing with the world. We guide you to reach your goal.
                And Be the best with us.
              </h6>
            </div>
          </div>
          <div className='col-md-6'>
            <img src={messi} alt='' className='img-fluid' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
