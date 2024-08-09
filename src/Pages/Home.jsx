import React from 'react'
import Navbar from '../Components/Navbar'
import AboutUs from '../Components/AboutUs/AboutUs'
import Progress from '../Components/AboutUs/Progress'
import ServiceTab from '../Components/Services/ServiceTab'
import WhyUs from '../Components/WhyUS/WhyUs'
import Testimonial from '../Components/Testimonials/Testimonial'
import { BusinessAndData } from '../Components/ServicesCategories/BusinessAnalytic/BusinessAndData'
import { MarketingAnalytics } from '../Components/ServicesCategories/MarketingAnalytic/MarketingAnalytics'
import { Automation } from '../Components/ServicesCategories/Automation/Automation'

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <AboutUs />
      <Progress />
      <ServiceTab />
      <WhyUs />
      <Testimonial /> */}
      {/* <BusinessAndData /> */}
      <MarketingAnalytics />
      {/* <Automation /> */}
    </>
  )
}

export default Home
