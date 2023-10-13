import React from 'react'
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Navbar from './navbar'
import Footer from './footer'

import './photography.css'


const Photography = () => {
  return (
    <div className="body">
      <Navbar />
      <div className="container">
        <section className="photography-catalogue">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10 mt-5">

                <Breadcrumb data-bs-theme="dark">
                <Breadcrumb.Item href="/catalogue"><div className="bread">Business Catalogue</div> </Breadcrumb.Item>
                <Breadcrumb.Item active >Photography Portfolio</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>

            <div  className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="card m-3"   data-bs-theme="dark">
                  <img src="/portfolio/agency1.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                  <h5 className="card-title">Agency &amp; Event Photography</h5>
                  <p className="card-text">
                  Through partnerships with Marketing Agencies, the company has
                  been able to document various concerts, conferences, seminars, etcetera.
                  </p>
                  <Button variant="outline-light" href="#" >
                    View
                  </Button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="card m-3"   data-bs-theme="dark">
                  <img src="/portfolio/corporate.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                  <h5 className="card-title">Corporate Photography</h5>
                  <p className="card-text">
                  From headshots and company profile pictures, to organisation documentation ... check out this corporate portfolio.
                  </p>
                  <Button variant="outline-light" href="#" >
                    View
                  </Button>
                  </div>
                </div>
              </div>
            </div>

            <div  className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="card m-3"   data-bs-theme="dark">
                  <img src="/portfolio/food.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                  <h5 className="card-title">Food Photography</h5>
                  <p className="card-text">
                  Overtime, this company has mastered the art of using texture and colour
                  to illustrate impressions of tangibility of a meal. Behold the
                  food portfolio.
                  </p>
                  <Button variant="outline-light" href="#" >
                    View
                  </Button>

                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="card m-3"   data-bs-theme="dark">
                  <img src="/portfolio/portraiture.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                  <h5 className="card-title">Portraiture</h5>
                  <p className="card-text">
                  For whatever reason you choose to do a portrait, the company can guarantee you will feel comfortable, conﬁdent and
                  together, we’ll create images that meet your goals. These images will ﬂatter and
                  showcase your strengths.
                  </p>
                  <Button variant="outline-light" href="#" >
                    View
                  </Button>
                  </div>
                </div>
              </div>
            </div>

            <div  className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="card m-3"   data-bs-theme="dark">
                  <img src="/portfolio/product.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                  <h5 className="card-title">Product &amp; Commercial Photography</h5>
                  <p className="card-text">
                  Photography for marketing, some would say. However way you want
                  to look at it, if you are looking for pictures to boost the sales
                  of your products or commodities, look no further.
                  </p>
                  <Button variant="outline-light" href="#" >
                    View
                  </Button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="card m-3"   data-bs-theme="dark">
                  <img src="/portfolio/studio2.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                  <h5 className="card-title">Studio Photography</h5>
                  <p className="card-text">
                  Anything studio; this is really a cocktail. Family, Beauty, Potraiture, and many more
                  </p>
                  <Button variant="outline-light" href="#" >
                    View
                  </Button>
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

export default Photography
