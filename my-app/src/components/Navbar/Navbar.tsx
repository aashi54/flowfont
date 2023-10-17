"use client"
import { useState } from 'react';
import Link from 'next/link';
import { GrFormDown, GrMenu } from 'react-icons/gr'; // Import the GrMenu icon
import './Navbar.css';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Initially set isOpen to false
  const router = useRouter();
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleLoan = () => {
    router.push('/loan-application');
  };

  const emiCal = () => {
    router.push('/emicalculator')
  }


  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}> {/* Add 'open' class if isOpen is true */}
      <div className='logo'>
        <img src="https://paisaflow.com/wp-content/uploads/2023/09/WhatsApp_Image_2023-09-25_at_21.37.19-removebg-preview.png" className='logo-src'/>
      </div>

      {/* Add a button with an onClick handler to toggle the Navbar */}
      <div className="mobile-menu" onClick={toggleNav}>
        {isOpen ? <GrMenu /> : <GrMenu />} {/* Use GrMenu icon */}
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}> {/* Add 'open' class if isOpen is true */}
        <div className="dropdown">
          <button onClick={handleLoan} className="services link link-btn">Personal Loan</button>
          {/* <div className="dropdown-menu">
            <ul>
              <li className='ul-li'>Personal Loan</li>
              <li className='ul-li'>Balance Transfer</li>
              <li className='ul-li'>Micro loan</li>
              <li className='ul-li'>Overdraft</li>
            </ul>
          </div> */}
        </div>
        <div className="dropdown"> 
          <button onClick={emiCal} className="services link link-btn">Emi Calculator</button>
          {/* <div className="dropdown-menu">
            <ul>
              <li className='ul-li'>Emi Calculator</li>
            </ul>
          </div> */}
        </div>
        <div className="track link">Track Your Application</div>
        <div className="about link">About</div>
        <div className="contact link">Contact</div>
      </div>

      <div className="sign">
        <div><button className='btn'>Sign in</button></div>
      </div>
    </nav>
  );
};

export default Navbar;
