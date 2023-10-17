// components/ClientTestimonialSlider.tsx
'use client'
import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientTestimonial from "./ClientTestimonial";

interface ClientTestimonialProps {
  testimonials: Testimonial[];
}

interface Testimonial {
  text: string;
  rating: number;
  clientName: string;
  clientImage: string;
}

const ClientTestimonialSlider: React.FC<ClientTestimonialProps> = ({
  testimonials,
}) => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings} className="client-testimonial-slider">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="client-testimonial-slide">
          <ClientTestimonial {...testimonial} />
        </div>
      ))}
    </Slider>
  );
};

export default ClientTestimonialSlider;
