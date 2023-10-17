// components/HamburgerNavbar.tsx
"use client"
import React, { useState, useEffect, useRef } from 'react';
import './Navbar1.css'

const HamburgerNavbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !(navRef.current as Node).contains(event.target as Node)) {
        setIsNavOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="navbar1">
        <div className='nav-content'>
      
      <div>
      <img src="https://paisaflow.com/wp-content/uploads/2023/09/WhatsApp_Image_2023-09-25_at_21.37.19-removebg-preview.png" className='logo-src1'/>
      </div>
      <div className={`hamburger ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      </div>
      <div className={`nav-links1 ${isNavOpen ? 'active' : ''}`} ref={navRef}>
        <a href="/loan-application">Personal Loan</a>
       
        <a href="/emicalculator">Emi Calculator</a>
        <a href="#">Track Your Application</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default HamburgerNavbar;
