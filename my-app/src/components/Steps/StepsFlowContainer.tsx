// components/StepsFlowContainer.tsx
import React from 'react';
import './StepsFlowContainer.css';
import StepsCard from './StepsCard';
import ScrollAnimation from '../ScrollAnimation';


const StepsFlowContainer: React.FC = () => {
  return (
    <div className="steps-flow-container">
     <div className="numberCount-heading">
      <h3 className='numberCount-heading1'>Getting Started is Easy!</h3>
      <p className='numberCount-heading2'>Just a Few Simple Steps to Access 40+ Lenders</p>
    </div>

    <div className='count-container'>
      <ScrollAnimation>
        <div className='single-card'>
    <StepsCard
        imageSrc="https://dzzu957mxv8q0.cloudfront.net/images/website/home/OTP.svg"
        count= "01"
        className='normal-card'
        
      />
         <div className='single-card-text'>
      <p>OTP & register</p></div>
  </div>
  </ScrollAnimation>
  <ScrollAnimation>
  <div className='single-card'>
<StepsCard
        imageSrc="https://dzzu957mxv8q0.cloudfront.net/images/website/home/eligibility.svg"
        count= "02"
        className="colored-card nomal-card"
      /> <div className='single-card-text'>
       <p>Check your loan eligibility</p>
       </div>
      </div>
      </ScrollAnimation>
      <ScrollAnimation>
      <div className='single-card'>
<StepsCard
        imageSrc="https://dzzu957mxv8q0.cloudfront.net/images/website/home/share_doc.svg"
        count= "03"
        className='normal-card'
        
      />
      <div className='single-card-text'>
       <p>Share documents and apply</p>
      </div>
      </div>
      </ScrollAnimation>

      <ScrollAnimation>
      <div className='single-card'>

<StepsCard
        imageSrc="https://dzzu957mxv8q0.cloudfront.net/images/website/home/lender_match.svg"
        count= "04"
        className="colored-card normal-card"
      />
       <div className='single-card-text'>
       <p>Get matched with right lenders</p></div>
      </div>
      </ScrollAnimation>
      <ScrollAnimation>
      <div className='single-card'>
<StepsCard
        imageSrc="https://dzzu957mxv8q0.cloudfront.net/images/website/home/negotiation.svg"
        count= "05"
        className='normal-card'
      />
         <div className='single-card-text'>
       <p>We&apos;ll negotiate the best terms for you</p></div>
      </div>
      </ScrollAnimation>
      <ScrollAnimation>
      <div className='single-card '>

<StepsCard
        imageSrc="https://dzzu957mxv8q0.cloudfront.net/images/website/home/loan_big.svg"
        count= "06"
        className="colored-card normal-card"
      />
         <div className='single-card-text'>
       <p>Get your loan in 48 hours</p></div>
      </div>
      </ScrollAnimation>
    </div>


    </div>
  );
};

export default StepsFlowContainer;
