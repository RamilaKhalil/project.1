import React,{useEffect, useRef} from 'react';
import gsap from 'gsap';
import Navbar from './Components/Navbar';
import './index.css';
import '../public/fonts/fonts.css';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
import Page5 from './Components/Page5';
import Footer from './Components/Footer';





function App() {
 
  
  return (
    <>
     <Navbar/>
     <Page1/>
     <Page2
        img1="/images/pexels-pavel-danilyuk-8421914.jpg"
        img2="/images/pexels-vika-glitter-392079-1620758.jpg"
        img3="/images/pexels-tamillesesposito-19214179.jpg"
      />
      <Page3/>
      <Page4/>
      <Page4/>
      <Page5/>
      <Footer/>
    </>
    
  )
}

export default App
