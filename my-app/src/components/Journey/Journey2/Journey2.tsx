// Journey2.tsx
"use client"
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './Journey2.css'

const Journey2 = ({
  onNext,
  onData, // Function to send data to the parent component
}: {
  onNext: () => void;
  onData: (data: any) => void;
}) => {
  const [yearlyIncome, setYearlyIncome] = useState('');
  const [isValid, setIsValid] = useState(true); // Add a state for validation

  const handleChange = (event: any) => {
    const inputValue = event.target.value;
    // Perform validation here (e.g., check if it's a valid number)
    // For simplicity, we'll assume any input is valid for this example
    setYearlyIncome(inputValue);
    setIsValid(true); // Reset validation
  };

  const handleNext = () => {
    if (yearlyIncome) {
      // Send data to the parent component
      onData({ yearlyIncome });
      onNext();
    } else {
      setIsValid(false);
    }
  };

  return (
    <>
      <div className='yearly-income-container'>
        <Typography variant="h5" gutterBottom style={{
           fontSize : '20px',
           fontWeight : 'bold',
           marginTop: '25px',
         
        }}>
          Your Monthly in Hand Salary
        </Typography>
        <Grid container spacing={2}>
          <div className='income-grids'>
            <div className="income-grid">
              <input
                type="number"
                placeholder="e.g. 300000"
                value={yearlyIncome}
                onChange={handleChange}
                className={!isValid ? 'error-input input-field' : 'input-field'}
              />
              {!isValid && (
                <p className="error-message">Please enter a valid yearly income.</p>
              )}
            </div>
          </div>
        </Grid>
        <button onClick={handleNext} className='j2-btn'>Next</button>
      </div>
    </>
  );
};

export default Journey2;
