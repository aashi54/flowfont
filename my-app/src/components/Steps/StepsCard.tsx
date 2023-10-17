// components/CustomizedCard.tsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './StepsCard.css';


interface StepsCardProps {
  imageSrc: string;
  count : string;
  className?: string;
}

const StepsCard: React.FC<StepsCardProps> = ({ imageSrc, count, className}) => {
  return (
   
    <Card className={`custom-card1 ${className || ''}`} style={{backgroundColor:"#36373b", borderRadius:'10px'}}>
      <CardContent className="card-content">
        <div className="circle">{count}</div>
        <img src={imageSrc} alt="Card Image" className="card-image" />
      </CardContent>
    </Card>
   
  );
};

export default StepsCard;
