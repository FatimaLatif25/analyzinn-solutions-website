import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Pages/Services";
import BusinessAnalytics from "./Components/ServicesCategories/BusinessAnalytic/BusinessAndData"
import DigitalMarketing from "./Components/ServicesCategories/MarketingAnalytic/MarketingAnalytics"
import AutomationIntegration from "./Components/ServicesCategories/Automation/Automation"
import "./App.css";
import CustomFooter from "./Components/Footer/Footer";
import About from "./Pages/About";

function App() {

  return (

    <Router>
      <Navbar />
    <>
      <Routes>
      <Route path="/business-analytics" element={<BusinessAnalytics />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/automation-integration" element={<AutomationIntegration />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/contacts" element={<ContactUs />} />
      </Routes>
    </>
    <CustomFooter />
  </Router>
  );
}

export default App;