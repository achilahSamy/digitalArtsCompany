import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './newsletterModal.css'
import SocialMedia from './socialMedia'

import { AlertError } from './partials/alertError';
import { AlertSuccess } from './partials/alertSuccess';


const NewsletterModal = (props) => {

    const initialFormData = {
       name: '',
       email: '',
     };

    const [formData, setFormData] = useState(initialFormData);
    const [formSuccess, setFormSuccess] = useState('');
    const [formErrors, setFormErrors] = useState([]);

    const [modalShow, setModalShow] = React.useState(false);
    const [validated, setValidated] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request
      await axios.post('/api/v1/newslettersubscriber/', formData);

      // HTTP req successful
      setFormSuccess('Thank You for subscribing. You will receive all our letters.');

      // Reset form data
      setFormData(initialFormData);
    } catch (err) {
      handleErrors(err);
    }
  };

  const handleErrors = (err) => {
    if (err.response.data && err.response.data.errors) {
      // Handle validation errors
      const { errors } = err.response.data;

      let errorMsg = [];
      for (let error of errors) {
        const { msg } = error;

        errorMsg.push(msg);
      }

      setFormErrors(errorMsg);
    } else {
      // Handle generic error
      setFormErrors(['Oops, there was an error!']);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormErrors([]);
    setFormSuccess('');
  };



  return (
    <Modal className="newsletter"
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >


      <Modal.Header closeButton data-bs-theme="dark">
        <Modal.Title className="title" id="contained-modal-title-vcenter">
          Newsletter Subscription Form
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Your first and last name"
            className="mb-3 mt-3 text-secondary"
            data-bs-theme="dark" >
            <Form.Control
              required
              name="name"
              type="text"
              value={formData.name}
              onInput={handleChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3 text-secondary"
            data-bs-theme="dark" >
            <Form.Control
              required
              name="email"
              type="email"
              value={formData.email}
              onInput={handleChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </FloatingLabel>
          <AlertSuccess success={formSuccess} />
          <AlertError errors={formErrors} />
          <div className="d-grid gap-2 mt-3">
            <Button variant="outline-light" type="submit" value="Submit">
              Register
            </Button>
          </div>
        </Form>
      </Modal.Body>

      <Modal.Footer >
        <SocialMedia />
      </Modal.Footer>
    </Modal>
  )
}

export default NewsletterModal
