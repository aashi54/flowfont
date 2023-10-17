"use client"
import React, { useState, useEffect } from 'react';
import Navbar1 from './Navbar1';
import Navbar from './Navbar';



const MainNav = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    // Update window width when the component mounts and when the window is resized
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <div>
        {/* Conditionally render Navbar1 or Navbar2 based on the window width */}
        {/* {windowWidth <= 768 ? <Navbar1 /> : <Navbar />} */}
        <Navbar/>
      </div>
    );
  };
  
  export default MainNav;