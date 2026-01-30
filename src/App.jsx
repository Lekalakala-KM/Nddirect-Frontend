import React from 'react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import CTA from './components/CTA'
import Services from './components/Services'
import CTA2 from './components/CTA2'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-[#f0ede8]'>
      <Nav />
      <HeroSection /> 
      <CTA />
      <AboutSection/>
      <Services/>
      <CTA2/> 
      <Contact />
      <Footer />
    </div>
  )
}

export default App