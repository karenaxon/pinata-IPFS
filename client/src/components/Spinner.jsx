import React from 'react';
import { Circles } from 'react-loader-spinner';

const Spinner = ({ message }) => {
  return (
    <>
      <Circles 
        color={'gray'}
        height={40}
        width={170}
      />
      <p>{message}</p>
    </>
  )
}

export default Spinner;