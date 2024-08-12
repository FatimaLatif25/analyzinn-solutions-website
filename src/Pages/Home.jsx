import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import AboutUs from '../Components/AboutUs/AboutUs'
import Progress from '../Components/AboutUs/Progress'
import ServiceTab from '../Components/Services/ServiceTab'
import WhyUs from '../Components/WhyUS/WhyUs'
import Testimonial from '../Components/Testimonials/Testimonial'
import HeroSection from '../Components/HeroSection/HeroSection'
import Contact from '../Components/Contact/Contact'

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Progress />
      <ServiceTab />
      <WhyUs />
      <Testimonial />
      <Contact />
      {/* <BusinessAndData /> */}
      {/* <MarketingAnalytics /> */}
      {/* <Automation /> */}
    </>
  )
}

export default Home
