import React from 'react'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom'



const SocialMedia = () => {
  return (
    <div>
      <div className="container">
        <section className="social-media">

          <div className="media">

            <Stack direction="horizontal" gap={3}>
                <em><Link to='https://www.instagram.com/twenymoments/' target="_blank" rel="noopener noreferrer"><FaInstagram /></Link></em>

               <div className="vr" />
               <em><Link to=''><FaLinkedinIn /></Link></em>
             </Stack>

          </div>



        </section>

      </div>

    </div>
  )
}

export default SocialMedia
