import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import logo from '../../images/sports-logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='bg-dark p-4'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={logo} alt='' />
        </div>
        <div className='col-md-6'>
          <span>
            <i className='fab fa-facebook text-primary fs-3 mt-5'></i>
          </span>
          <span>
            <i className='fab fa-instagram text-primary fs-3 mt-5 ms-4'></i>
          </span>
          <span>
            <i className='fab fa-linkedin text-primary fs-3 mt-5 ms-4'></i>
          </span>
          <p className='text-white my-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            quam.
          </p>
        </div>
        <small className='text-white m-2'>
          @ All rights reserved by Sharif Mahmud
        </small>
      </div>
    </div>
  );
};

export default Footer;
