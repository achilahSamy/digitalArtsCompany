import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


import Navbar from './navbar'
import Footer from './footer'



const portfolio = () => {
  return (

    <div className="body">
      <Navbar />

      <div className="container">
        <section className="portfolio">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="title m-5">
                  <h1 className="label1">service Portfolio  </h1>
                  <div className="line-shape"></div>
                  <br />
                </div>
              </div>
            </div>

            <div className="row justify-content-evenly">
              <div class="col-lg-6 col-md-10">
              <div className="col-4">
                <div className="card m-3"   data-bs-theme="dark">
                  <img src="..." className="card-img-top" alt="..."/>
                  <div className="card-body">
                  <h5 className="card-title">Corporate Photography</h5>
                  <p className="card-text">
                  From headshots and product product photography, to organisation's documentation ...
                  </p>
                  <Button variant="outline-light" href="/portfolio/corporate" >
                    View
                  </Button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card m-3"   data-bs-theme="dark">
                  <img src="..." className="card-img-top" alt="..."/>
                  <div className="card-body">
                  <h5 className="card-title">Studio Photography</h5>
                  <p className="card-text">
                  Anything studio; this is really a cocktail. Family, Beauty, Potraiture, and many more
                  </p>
                  <Button variant="outline-light" href="/portfolio/studio" >
                    View
                  </Button>
                  </div>
                </div>
              </div>


              </div>
              <div class="col-lg-6 col-md-10">
              <div className="col-4">
                <div className="card m-3"   data-bs-theme="dark">
                  <img src="..." className="card-img-top" alt="..."/>
                  <div className="card-body">
                  <h5 className="card-title">Food Photography</h5>
                  <p className="card-text">
                  Overtime, we have mastered the art of using texture and colour to illustrate impressions of tangibility of a meal. 
                  </p>
                  <Button variant="outline-light" href="/portfolio/corporate" >
                    View
                  </Button>

                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card m-3"   data-bs-theme="dark">
                  <img src="..." className="card-img-top" alt="..."/>
                  <div className="card-body">
                  <h5 className="card-title">Portraiture</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Button variant="outline-light" href="/portfolio/corporate" >
                    View
                  </Button>

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

export default portfolio
