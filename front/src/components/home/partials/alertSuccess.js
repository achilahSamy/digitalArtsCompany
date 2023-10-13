import React from 'react'

import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export const AlertSuccess = ({ success }) => {

  const [show, setShow] = useState(true);

  if (success === '') {
    return <></>;
  }


  return (
    <Alert variant="success" onClose={() => setShow(false)} dismissible>
      <p className='success'>{success}</p>
    </Alert>
  );


};
