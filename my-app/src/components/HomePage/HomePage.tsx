// pages/index.tsx
"use client"
import React from 'react';
import './HomePage.css'
import Services from '../Services/Services';
import StepsFlowContainer from '../Steps/StepsFlowContainer';
import About from '../About/About';
import Partners from '../Partners/Partners';
import ClientTestimonialSlider from '../ClientTestimonial/ClientTestimonialSlider';
import { useRouter } from 'next/navigation';


const HomePage = () => {
  const router = useRouter();

  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.",
      rating: 4.5,
      clientName: "John Doe",
      clientImage: "https://i.postimg.cc/DwKj9Q7J/user1.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4.3,
      clientName: "John Doe",
      clientImage: "https://i.postimg.cc/DwKj9Q7J/user1.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4.5,
      clientName: "John Doe",
      clientImage: "https://i.postimg.cc/DwKj9Q7J/user1.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
      clientName: "John Doe",
      clientImage: "https://i.postimg.cc/DwKj9Q7J/user1.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4.5,
      clientName: "John Doe",
      clientImage: "https://i.postimg.cc/DwKj9Q7J/user1.jpg",
    },
  ];
      
  const handleApplyNowClick = () => {
    router.push('/loan-application'); // Replace '/apply-now' with your actual route
  }; 
  return (
    <div className='container'>
      <div className='home-section'>
        <div className='wallet-text'>
         <div className="animated-image">
        <img
          src="https://i.postimg.cc/BvF1fFrX/transfer-1-removebg-preview.png"
          alt="Animated Wallet"
          className='wallet-img'
        />
      </div>


      <div className='animated-text'>
       <div className='text'><h1 className='tag-line'>Apply Now and get approval within 2 min.   </h1></div>
       <div className='text'><h1 className='tag-line'>with the lowest rate of interest</h1></div>
 <button className='check-score-btn' onClick={handleApplyNowClick}>Apply Now</button>
      </div>
    
      </div>
      </div>
    
       
           <div className='services-components'>
      <div className='service-components'>
        <h1 className='service-components-heading'>Our Services</h1>
      <Services/>
      </div>
      </div>



      <div className='step-diag'>
      <StepsFlowContainer />
    </div>

     
    <div className='about-container'>
      <About/>
    </div>

    <div className="partner-container">
      <Partners/>
    </div>
    
    <div className="client-testimonials">
    
    <div className="client-testimonial">
    <div className="client-testimonial-heading">
      <h3 className='client-testimonial-heading1'>What Our Customers Say</h3>
      {/* <p className='client-testimonial-heading2'>What Our Customers Say</p> */}
    </div>
          <ClientTestimonialSlider testimonials={testimonials} />
        </div>
        </div>
    </div>
  );
};

export default HomePage;
