import React from "react";
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './contact.css'
import Navbar from './navbar'
import Footer from './footer'
import NewsletterModal from './newsletterModal'

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { AlertError } from './partials/alertError';
import { AlertSuccess } from './partials/alertSuccess';


const Contact = () => {
  const initialFormData = {
     name: '',
     email: '',
     tel: '',
     message: ''
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
    await axios.post('/api/v1/mail/', formData);



    // HTTP req successful
    setFormSuccess('Thanks for reaching out. You will hear from us soon.');

    // Reset form data
    setFormData(initialFormData);
  }

    catch (err) {

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
    <div className="body">
    <Navbar />

      <div className="container">
        <section className="contact-section" data-aos="fade">
        	<div className="container-fluid">


          		<div className="row justify-content-center">
          			<div className="col-md-7">
          				<div className="title m-5" data-aos="fade-down">
          					<h1 className="label1">Reach out to us ...</h1>
                    <div className="line-shape"></div>
          					<br />
          				</div>

          				<p className="mb-5" data-aos="fade-right">
                    <detail>
                      For business, and/ or any other reason, complete the form below; <br /><br />
                      You may also sign up for our <em><a href="#" onClick={() => setModalShow(true)}> newsletter</a></em>
                    </detail>
          				</p>

                  <NewsletterModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />



        				<div className="row" data-aos="zoom-in">
        					<div className="col-lg-8 mb-5">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Your first and last name"
                        className="mb-3 text-secondary"
                        data-bs-theme="dark" >
                        <Form.Control
                          required
                          name="name"
                          id="name"
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
                          type="email"
                          value={formData.email}
                          onInput={handleChange}
                          />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </FloatingLabel>

                      <FloatingLabel
                          controlId="floatingInput"
                          label="Phone number"
                          className="mb-3 text-secondary"
                          data-bs-theme="dark" >
                          <Form.Control
                            required
                            name="tel"
                            type="tel"
                            placeholder="+256 *** **** **"
                            value={formData.tel}
                            onInput={handleChange}
                            />
                      </FloatingLabel>
                      <FloatingLabel controlId="floatingTextarea2" label="Message"
                      className="mb-3 text-secondary"
                      data-bs-theme="dark" >
                         <Form.Control
                           required
                           name="message"
                           as="textarea"
                           placeholder="Leave a comment here"
                           value={formData.message}
                           onInput={handleChange}
                           />
                       </FloatingLabel>
                       <AlertSuccess success={formSuccess} />
                       <AlertError errors={formErrors} />

                       <div className="d-grid gap-2 mt-3">
                        <Button  variant="outline-light" size="lg" type="submit">
                          Send
                        </Button>
                      </div>

        						</Form>
        					</div>
        					<div className="col-lg-4 ml-auto text-light">
        						<div className="contact-card mb-3">
        							<p className="mb-1"><subhead> Address </subhead></p>
        							<p className="mb-4">
        								<detail>
        								4 Balintuma Rd., Kiwatule (near Northern Bypass), Kampala Region, Uganda
        								</detail>
        							</p>

        							<p className="mb-1"><subhead> Phone </subhead></p>
        							<p className="mb-4"><detail>+256 777 357 56 </detail></p>

        							<p className="mb-1"><subhead>Email Address</subhead></p>
        							<p className="mb-0"><detail>enquiry@twenymoments.com</detail></p>

        						</div>

        					</div>
        				</div>
        			</div>

        		</div>
        	</div>
        </section>
      </div>

      <Footer />

    </div>
  )
}

export default Contact
