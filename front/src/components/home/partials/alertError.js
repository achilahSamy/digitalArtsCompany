import React from 'react'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


export const AlertError = ({ errors }) => {

  const [show, setShow] = useState(true);

  if (errors.length === 0) {
    return <></>;
  }


  return (
    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
      {errors.map((error) => (
        <p>
          {error}
        </p>
      ))}

    </Alert>
  );


};
