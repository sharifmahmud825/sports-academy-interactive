import React from 'react';
import { Link } from 'react-router-dom';
import CampDetails from '../CampDetails/CampDetails';

const Camp = (props) => {
  const { id, title, imgThumbnail, desc, fee, duration } = props.camp;
  return (
    <div>
      <div className='container'>
        <div className='col'>
          <div className=' card h-100'>
            <img src={imgThumbnail} class='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>
              <hr />
              <p className='card-text'>{desc}</p>
              <div className='d-flex justify-content-between'>
                <h4 className='card-text'> $ {fee}</h4>
                <p className='card-text'>{duration}</p>
              </div>
              <hr />
              <Link to={`/camp/${id}`}>
                <button className='btn btn-primary w-100'>Get Admission</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camp;
