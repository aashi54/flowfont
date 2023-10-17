import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import './Journey12.css';

const Journey12 = ({
  onNext,
  onData,
}: {
  onNext: () => void;
  onData: (data: any) => void;
}) => {
  const [monthlyEMI, setMonthlyEMI] = useState('');
  const [isEMIValid, setIsEMIValid] = useState(true);

  const handleMonthlyEMIChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setMonthlyEMI(inputValue);
    setIsEMIValid(true); // Reset validation
  };

  const handleNext = () => {
    const emi = parseFloat(monthlyEMI);

    if (!isNaN(emi) && emi >= 0) {
      // Send data to the parent component
      onData({ monthlyEMI: emi });
      onNext();
    } else {
      setIsEMIValid(false);
    }
  };

  return (
    <>
      <div className="emi-details-container">
        {/* <Typography variant="h5" gutterBottom style={{
          fontSize: '25px',
          fontWeight: 'bold'
        }}>
          Monthly Loan EMI
        </Typography> */}
        <div className="input-container">
          <label htmlFor="monthlyEMI" className="j12-label">Monthly EMI:</label>
          <input
            type="text"
            id="monthlyEMI"
            placeholder="Enter your monthly EMI"
            value={monthlyEMI}
            onChange={handleMonthlyEMIChange}
            className={!isEMIValid ? 'error-input emi-input' : 'emi-input'}
            required
          />
          {!isEMIValid && (
            <p className="error-message">Please enter a valid monthly EMI amount.</p>
          )}
        </div>
        <button onClick={handleNext} className="j12-btn">Next</button>
      </div>
    </>
  );
};

export default Journey12;
