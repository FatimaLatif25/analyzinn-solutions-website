import logo from './logo.svg';
import './App.css';
import { Button, Flex } from 'antd';
import 'antd/dist/reset.css';
import Nav from './components/Nav';
import About from './components/about/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App(){
  return (
    <BrowserRouter> 
      <Nav />  
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/about" element={<About />} />
      {/* <Route path="/services" element={<Services />} />  */}
      {/* <Route path="/contacts" element={<Contacts />} />  */}
    </Routes>
    </BrowserRouter>
  );
};

export default App;


