import React from 'react'
import Navbar from '../Components/Navbar'
import AboutUs from '../Components/AboutUs/AboutUs'
import Progress from '../Components/AboutUs/Progress'
import ServiceTab from '../Components/Services/ServiceTab'
import WhyUs from '../Components/WhyUS/WhyUs'
import Testimonial from '../Components/Testimonials/Testimonial'

const Home = () => {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Progress />
      <ServiceTab />
      <WhyUs />
      <Testimonial />
    </>
  )
}

export default Home
