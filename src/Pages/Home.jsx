import React from 'react'
// import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection/HeroSection'
import AboutUs from '../Components/AboutUs/AboutUs'
import Progress from '../Components/AboutUs/Progress'
import Testimonial from '../Components/Testimonials/Testimonial'
import WhyUs from '../Components/WhyUS/WhyUs'
import Services from '../Components/Services/ServiceTab'

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Progress />
      <Services />
      <WhyUs />
      <Testimonial />
      
      </>
  )
}

export default Home
