import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './Journey4.css'

const Journey4 = ({ onNext, onData }: { onNext: () => void; onData: (data: any) => void }) => {
  const [employerName, setEmployerName] = useState('');

  const handleNext = () => {
    if (employerName) {
      // Send data to the parent component using onData callback
      onData({employerName});
      onNext();
    } else {
      alert('Please enter employer name before proceeding.');
    }
  };


  return (
    <>
      <div className='employment-details-container'>
        <Typography variant="h5" gutterBottom style={{
           fontSize : '20px',
           fontWeight : 'bold',
           marginTop: '25px',
         
        }}>
          Employment Details
        </Typography>
        <Typography variant="subtitle1" gutterBottom style={{
          marginLeft: '-5px'
        }}>
          Working Company Name
        </Typography>
        <Grid container spacing={2}>
          <div className='employer-name'>
            <input
              type="text"
              placeholder="Enter Company Name..."
              value={employerName}
              onChange={(e) => setEmployerName(e.target.value)}
              className='contact-input'
            />
          </div>
        </Grid>
        <button onClick={handleNext} className='j4-btn'>Next</button>
      </div>
    </>
  );
};

export default Journey4;
