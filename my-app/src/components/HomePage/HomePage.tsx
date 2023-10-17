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
      text: "I needed a loan to expand my business, and PaisaFlow Loans made it easy and hassle-free. The application process was straightforward, and the team was incredibly supportive. I highly recommend PaisaFlow Loans!",
      rating: 4.5,
      clientName: "Vikram Tiwari",
      clientImage: "https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8MTcyOTI1OHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      text: "Getting a home improvement loan from PaisaFlow Lending was a breeze. Their competitive interest rates and flexible repayment options allowed me to renovate my home without any financial stress. I am thrilled with their service!",
      rating: 4.3,
      clientName: "Shreya Joshi",
      clientImage: "https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxNzI5MjU4fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      text: "Thanks to PaisaFlow, I was able to secure an education loan with low interest rates. It helped me cover my tuition and living expenses while pursuing my degree.PaisaFlow made my dreams of higher education come true!",
      rating: 4.5,
      clientName: "Deepak Sharma",
      clientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxNzI5MjU4fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      text: "As a freelancer, I was worried about my variable income.PaisaFlow personal loan gave me the financial stability I needed. Their quick approval process and friendly staff were a pleasant surprise.",
      rating: 4,
      clientName: "Simran Reddy",
      clientImage: "https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      text: "PaisaFlow helped me enjoy my retirement by offering a pensioner loan with excellent terms. I am now able to travel and pursue my hobbies worry-free. Thanks, PaisaFlow!",
      rating: 4.5,
      clientName: "Arjun Patel",
      clientImage: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
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
