import React, { useEffect, useState } from 'react';
import Camp from '../Camp/Camp';

const Camps = () => {
  const [camps, setCamps] = useState([]);
  useEffect(() => {
    fetch('./data.JSON')
      .then((res) => res.json())
      .then((data) => setCamps(data));
  }, []);
  return (
    <div>
      <h2 className='my-5'>Our Training Camps</h2>
      <div className='row row-cols-1 row-cols-md-3 g-3 my-2 p-3'>
        {camps.map((camp) => (
          <Camp camp={camp}></Camp>
        ))}
      </div>
    </div>
  );
};

export default Camps;
