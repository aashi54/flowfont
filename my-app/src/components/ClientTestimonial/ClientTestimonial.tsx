// components/ClientTestimonial.tsx
import React from "react";
import { Typography, Avatar, Rating } from "@mui/material";
// import { Person } from "@mui/icons-material";
import './ClientTestimonial.css'

interface ClientTestimonialProps {
  text: string;
  rating: number;
  clientName: string;
  clientImage: string;
}

const ClientTestimonial: React.FC<ClientTestimonialProps> = ({
  text,
  rating,
  clientName,
  clientImage,
}) => {
  return (
    <div className="client-testimonial-1">
         <div className="testimonial-content">
      <Typography variant="body1" className="testimonial-text" gutterBottom >
        {text}
      </Typography>
      <Rating value={rating} readOnly />
      <div className="client-details">
        <div className="client-info">
          <Avatar src={clientImage} alt={clientName} />
          <Typography variant="body2" color="white" style={{fontSize:'1.2rem'}}>
            {clientName}
          </Typography>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;
