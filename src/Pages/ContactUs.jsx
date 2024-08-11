import React from 'react'
import MainContact from '../Components/ContactUs/MainContact'
import Contact from '../Components/Contact/Contact'
import Navbar from '../Components/Navbar'
import CustomFooter from '../Components/Footer/Footer'

const ContactUs = () => {
  return (
   <>
      <Navbar />
      <MainContact />
      <Contact />
      <CustomFooter />
   </>
  )
}

export default ContactUs
