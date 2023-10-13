import React from 'react'
import Button from 'react-bootstrap/Button';

import Navbar from './navbar'
import Footer from './footer'

const Cinematography = () => {
  return (
    <div className="body">
      <Navbar />
      <div className="container">
        <section className="cinematography-portfolio">

          <div class="p-5 mb-4 mt-4 bg-dark text-white rounded-3">
            <div class="container-fluid py-5">
              <h3 class="display-5 header fw-light">Cinematographs</h3>
              <p class="col-md-8 fs-4">
                Soon you will see the finest from our collections ...
                compilation in progress
              </p>
              <a href="/catalogue">
                <button class="btn btn-outline-light" type="button">Back</button>

              </a>
            </div>
          </div>


        </section>


      </div>
      <Footer />

    </div>
  )
}

export default Cinematography
