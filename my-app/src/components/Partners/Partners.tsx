import React from 'react';
import "./Partners.css"
import ScrollAnimation from '../ScrollAnimation';


const partnerImages = [
  { id: 1, src: '/company1.jpg', alt: 'Company 1' },
  { id: 2, src: '/company2.jpg', alt: 'Company 2' },
  { id: 3, src: '/company3.jpg', alt: 'Company 3' },
  { id: 4, src: '/company4.jpg', alt: 'Company 4' },
  { id: 5, src: '/company5.jpg', alt: 'Company 5' },
  { id: 6, src: '/company6.jpg', alt: 'Company 6' },
  { id: 7, src: '/company7.jpg', alt: 'Company 7' },
  { id: 8, src: '/company8.jpg', alt: 'Company 8' },
  { id: 9, src: '/company9.jpg', alt: 'Company 9' },
  { id: 10, src: '/company10.jpg', alt: 'Company 10' },
  { id: 11, src: '/company11.jpg', alt: 'Company 11' },
  { id: 12, src: '/company12.jpg', alt: 'Company 12' },
  { id: 13, src: '/company13.jpg', alt: 'Company 13' },
  { id: 14, src: '/company14.jpg', alt: 'Company 14' },

  { id: 15, src: '/company15.jpg', alt: 'Company 15' },
  { id: 16, src: '/company16.jpg', alt: 'Company 16' },
  { id: 17, src: '/company17.jpg', alt: 'Company 17' },
  { id: 18, src: '/company18.jpg', alt: 'Company 18' },
  { id: 19, src: '/company19.jpg', alt: 'Company 19' },
  { id: 20, src: '/company20.jpg', alt: 'Company 20' },
  { id: 21, src: '/company21.jpg', alt: 'Company 21' },
  { id: 22, src: '/company22.jpg', alt: 'Company 22' },
  { id: 23, src: '/company23.jpg', alt: 'Company 23' },
  { id: 24, src: '/company24.jpg', alt: 'Company 24' },
  { id: 25, src: '/company25.jpg', alt: 'Company 25' },
  { id: 26, src: '/company26.jpg', alt: 'Company 26' },
  { id: 27, src: '/company27.jpg', alt: 'Company 27' },
  { id: 28, src: '/company28.jpg', alt: 'Company 28' },
  { id: 29, src: '/company29.jpg', alt: 'Company 29' },
  { id: 30, src: '/company30.jpg', alt: 'Company 30' },
  { id: 31, src: '/company31.jpg', alt: 'Company 31' },
  { id: 32, src: '/company32.jpg', alt: 'Company 32' },
  { id: 33, src: '/company33.jpg', alt: 'Company 33' },
  { id: 34, src: '/company34.jpg', alt: 'Company 34' },
  { id: 35, src: '/company35.jpg', alt: 'Company 35' },
];

const Partners: React.FC = () => {
  return (
    <div className="partners-container">
      <h1>Our Partners</h1>
      <div className="partner-logos">

        {partnerImages.map((partner, index) => (
          <ScrollAnimation key={partner.id}>
          <div key={partner.id} className="partner-logo">
            <img src={partner.src} alt={partner.alt} width={130} height={65}/>
          </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Partners;
