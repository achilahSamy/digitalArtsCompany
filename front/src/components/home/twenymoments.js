import React from 'react'

import Navbar from './navbar'
import Profile from './profile'
import Services from './services'
import Footer from './footer'


const Home = () => {
  return (
    <div className="body">
      <Navbar />

      <Profile />

      <Services />

      <Footer />

    </div>
  )
}

export default Home
