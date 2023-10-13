import React from 'react'
import { Link } from 'react-router-dom'


const Services = () => {
  return (
    <div className="container">
      <section className="catalogue" id="catalogue">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="title m-5">
                <h1 className="label1">businessCatalogue  </h1>
                <div className="line-shape"></div>
                <br />
              </div>
            </div>
            <div  className="section-title text-center pb-10 mb-5">
              <br/>
              <p  className="text detail">
              Not limited to these ( listed below ), even though our niche mostly revolves around them,
              this, is our Service Catalogue.
              </p>

            </div>
          </div>

          <div  className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="services" data-aos="fade-up">
                <heading>1 - Photography</heading>
                  <ul  className="detail">
                    <li>Agency &amp; Event Photography</li>
                    <li>Corporate Documentation</li>
                    <li>Food Photography</li>
                    <li>Portraiture</li>
                    <li>Product &amp; Commercial</li>
                    <li>Studio Photography</li>
                    <em><Link to='/photography'>photography portfolio</Link></em>
                  </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="services" data-aos="fade-up">
                <heading>2 - Cinematography</heading>
                  <ul  className="detail">
                    <li>Corporate Documentation</li>
                    <li>Agency &amp; Event Videos</li>
                    <li>Studio Session Recordings</li>
                    <li>Product &amp; Commercial Videos</li>
                    <em><Link to="/cinematography">cinematography portfolio</Link></em>

                  </ul>
              </div>
            </div>
{/* Comment
            <div className="col-lg-6 col-md-10">
              <div className="services" data-aos="fade-up">
                <heading>3 - Corporate Branding</heading>
                  <ul  className="detail">
                    <li>Corporate Brand Strategy Development and Implementation </li>
                    <li>Web Profile Management</li>
                    <li>Graphics Design &mdash; still, print &amp; motion graphics</li>
                    <li>Visio-Audio Production for social media &amp; promotional campaigns</li>
                    <em><a href="/branding">branding catalogue</a></em>
                  </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-10">
              <div className="services" data-aos="fade-up">
                <heading>4 - Art Research</heading>
                  <ul  className="detail">
                    <li>The socio-economic impact of HipHop on society in LDCs</li>
                    <li>The role Art can play in Preservation of Culture and Tradition</li>
                    <li>Inter-Art Domain Collaborations &mdash; visual art and music </li>
                    <em><a href="/research">research catalogue</a></em>
                  </ul>
              </div>
            </div>
             Comment */}

          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
