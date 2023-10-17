

// components/Journey7.tsx

import { ChangeEvent, useState } from 'react';
import './Journey7.css';
import Typography from '@material-ui/core/Typography';

const Journey7 = ({ onNext, onData }: { onNext: () => void; onData: (data: any) => void }) => {
  const [desiredLoanAmount, setDesiredLoanAmount] = useState<number | undefined>();
  const [error, setError] = useState<string | null>(null);
  const [desiredLoanTenure, setDesiredLoanTenure] = useState<number | undefined>();
  
  const handleLoanTenureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tenure = parseFloat(e.target.value);

    if (!isNaN(tenure)) {
      setDesiredLoanTenure(tenure);
      setError(null); 
    } else {
      setError('Please enter a valid number');
    }
  };


  const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(e.target.value);

    if (!isNaN(amount)) {
      setDesiredLoanAmount(amount);
      setError(null); // Clear any previous error
    } else {
      setError('Please enter a valid number');
    }
  };

 

  const handleNext = () => {
    if (typeof desiredLoanAmount !== 'undefined') {
      // Send data to the parent component using onData callback
      onData({ desiredLoanAmount, desiredLoanTenure });
      onNext();
    } else {
      setError('Please enter a desired loan amount');
    }
  };

  return (
    <div className="formContainer7">
      <Typography variant="h5" gutterBottom style={{
           fontSize : '20px',
           fontWeight : 'bold',
           marginTop: '25px',
         
        }}>
        Desired Loan Amount and Tenure
        </Typography>
      <div className="inputContainer7">
        <input
          type="number"
          placeholder="Enter desired loan amount"
          onChange={handleLoanAmountChange}
          value={desiredLoanAmount || ''}
          className="inputField7"
        />
         <input
          type="number"
          placeholder="Tenure (years)"
          onChange={handleLoanTenureChange}
          value={desiredLoanTenure || ''}
          className="inputField7"
        />
      </div>
      {error && <p className="error">{error}</p>}
      <button onClick={handleNext} className="j7-btn">
        Submit
      </button>
    </div>
  );
};

export default Journey7;
