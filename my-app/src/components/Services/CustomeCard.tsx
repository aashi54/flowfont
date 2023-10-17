// components/CustomCard.tsx
"use client"
import React, {useEffect, useRef, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './CustomeCard.css'
import ScrollAnimation from '../ScrollAnimation';

interface CustomCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  btntext: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, description, icon, btntext }) => {


 


  return (

    <ScrollAnimation>
    <Card variant="outlined" className='service-card-container'>
      <CardContent>
        <div className="pb-product active">
            <div className='name-desc'>
          <Typography variant="h6" className="product-name">
            {title}
          </Typography>
          <Typography color="textSecondary" className="product-desc">
            {description}
          </Typography>
          <Typography color="textSecondary" className="product-desc">
            { btntext}
          </Typography>
          </div>
          <div className='icon'>
          {icon && <div className="product-icon">{icon}</div>}
          </div>
        </div>
      </CardContent>
    </Card>
    </ScrollAnimation>
    
  );
};

export default CustomCard;
