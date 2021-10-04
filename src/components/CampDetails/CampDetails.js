import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CampDetails = () => {
  const { campId } = useParams();

  useEffect(() => {
    fetch('./data.JSON')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <div className='alert alert-success my-5 p-5' role='alert'>
        <h2>You have successfully enrolled in this training!!!</h2>
        <h1 className='my-4'>Be ready for the session champ!!</h1>
      </div>
    </div>
  );
};

export default CampDetails;
