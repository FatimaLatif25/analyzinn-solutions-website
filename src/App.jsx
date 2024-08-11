import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Service from './Pages/Service'
import ContactUs from './Pages/ContactUs'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import About from './Pages/About'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

  return (
    <>
      
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services/:service?" element={<Service/>}  />
          <Route path="/contacts" element={<ContactUs/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Footer />
      
    </>
  )
}

export default App
