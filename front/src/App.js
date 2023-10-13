import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import LetterPortal from './components/app/letter/lettermanagementportal'
import Application from './components/app/index'

import Navbar from './components/home/navbar'
import Footer from './components/home/footer'

import LandingPage from './components/home/landingpage'
import Home from './components/home/twenymoments'
import Profile from './components/home/profile'
import Portfolio from './components/home/portfolio'
import CorporatePortfolio from './components/home/corporatePortfolio'
import FoodPortfolio from './components/home/foodPortfolio'
import StudioPortfolio from './components/home/studioPortfolio'
import Membership from './components/home/membership'
import Store from './components/home/store'
import Contact from './components/home/Contact'
import Partnerships from './components/home/partnerships'
import Portraiture from './components/home/portraiture'
import Catalogue from './components/home/Catalogue'
import Photography from './components/home/photography'
import Branding from './components/home/branding'
import Cinematography from './components/home/cinematography'
import Research from './components/home/research'

import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
      AOS.init();
    }, [])


  return (

    <div className="main">

      <Router>

          <Routes>

            <Route path="app" element={<Application />} >
              <Route path="letterportal" element={<LetterPortal />} />
            </Route>

            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/cinematography" element={<Cinematography />} />

            <Route path="/branding" element={<Branding />} />
            <Route path="/research" element={<Research />} />
            <Route path="/portfolio" element={<Portfolio />} >
              <Route path="food" element={<FoodPortfolio />} />
              <Route path="studio" element={<StudioPortfolio />} />
              <Route path="corporate" element={<CorporatePortfolio />} />
              <Route path="portraiture" element={<Portraiture />} />
            </Route>
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />






          </Routes>

      </Router>

    </div>



  );
}

export default App
