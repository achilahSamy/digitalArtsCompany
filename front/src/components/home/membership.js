import React from 'react'

import Navbar from './navbar'
import Footer from './footer'


const membership = () => {
  return (

    <div className="body">
      <Navbar />

        <div className="container">
        <section className="membership">
          <div class="p-5 mb-4 mt-4 bg-dark text-white rounded-3">
            <div class="container-fluid py-5">
              <h3 class="display-5 header fw-light">Membership Packages</h3>
              <p class="col-md-8 fs-4">
                We are curating products to best fit our loyal clients.
                For your commitment to us through the times, we are putting
                together packages to reward you ... watch the space.
              </p>
            </div>
          </div>




        </section>

        </div>

        <Footer />

    </div>
  )
}

export default membership
