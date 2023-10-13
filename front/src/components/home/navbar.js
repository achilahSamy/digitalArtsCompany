import React from 'react'


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';



import { NavLink } from 'react-router-dom'

const NavBar = () => {


  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" sticky="top">

      <Container className="container-fluid justify-content-center">

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto p-2" variant="underline">
            <Nav.Item>
              <Nav.Link as={NavLink} end to="/home"> TwenyMoments</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} end to="/catalogue"> Catalogue</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>


            <Nav.Item>
              <Navbar.Brand href="/" className="brand">
                  <img src="/whitelogo.png" height="45" />
              </Navbar.Brand>
            </Nav.Item>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto p-2" variant="underline">
            <Nav.Item>
              <Nav.Link as={NavLink} end to="/contact"> Contact Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} end to="/membership"> Membership</Nav.Link>
            </Nav.Item>
          </Nav>
      </Navbar.Collapse>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />




      </Container>

    </Navbar>


  );


}

export default NavBar
