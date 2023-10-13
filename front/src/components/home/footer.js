import React from 'react'
import { Link } from 'react-router-dom'


import './footer.css'
import SocialMedia from './socialMedia'



const Footer = () => {
  return (

    <section className="footer page-footer bg-dark mt-5" >
      <div className="col-md-12 py-5">
        <p>
          Copyright &copy;{new Date().getFullYear()}
          <div className="vr" />
          <em>
            <Link to='https://twenymoments.com' target="_blank">TwenyMoments</Link>
          </em>
          <div className="vr" />
            All rights reserved
        </p>
        <SocialMedia />

      </div>
    </section>


  )
}

export default Footer
