import React from 'react';

const Camp = (props) => {
  const { id, title, imgThumbnail, desc } = props.camp;
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
              <hr />
              <button className='btn btn-primary w-100'>Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camp;
