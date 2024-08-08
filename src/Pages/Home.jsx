import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection/HeroSection'
import CustomFooter from '../Components/Footer/Footer'
import Contact from '../Components/Contact/Contact'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Contact />
      <CustomFooter />
      </>
  )
}

export default Home
