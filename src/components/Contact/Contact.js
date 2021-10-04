import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Contact = () => {
  return (
    <div>
      <div className='container p-5'>
        <h1>Contact Us</h1>
        <hr />
        <input type='text' placeholder='Email' className='form-control my-4' />
        <textarea
          name='Details'
          id=''
          cols='30'
          rows='10'
          className='form-control my-4'
        ></textarea>
        <button className='btn btn-primary w-100'>Submit</button>
      </div>
    </div>
  );
};

export default Contact;
