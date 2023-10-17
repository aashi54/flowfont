import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import './Journey11.css';

const Journey11 = ({
  onNext,
  onData,
}: {
  onNext: () => void;
  onData: (data: any) => void;
}) => {
  const [dobDay, setDobDay] = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobYear, setDobYear] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [isPanNumberValid, setIsPanNumberValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);

  const handleDobDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
  
    // Remove non-numeric characters, e.g., spaces
    inputValue = inputValue.replace(/\D/g, '');
  
    // Validate only numbers and limit the value to 2 digits
    if (/^\d*$/.test(inputValue)) {
      if (inputValue.length <= 2) {
        setDobDay(inputValue);
        setIsDateValid(true);
      }
    }
  };

  const handleDobMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
  
    // Remove non-numeric characters, e.g., spaces
    inputValue = inputValue.replace(/\D/g, '');
  
    // Validate only numbers and limit the value to 2 digits
    if (/^\d*$/.test(inputValue)) {
      if (inputValue.length <= 2) {
        setDobMonth(inputValue);
        setIsDateValid(true);
      }
    }
  };
  const handleDobYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setDobYear(inputValue);
  };

  const handlePanNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setPanNumber(inputValue);
    setIsPanNumberValid(true); // Reset validation
  };

  const handleNext = () => {
    if (panNumber.trim() !== '') {
      const day = parseInt(dobDay, 10);
      const month = parseInt(dobMonth, 10);
      const year = parseInt(dobYear, 10);

      // Validate DOB inputs (day, month, year)
      if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
        onData({ dob: `${day}-${month}-${year}`, panNumber });
        onNext();
      } else {
        setIsDateValid(false);
      }
    } else {
      setIsPanNumberValid(false);
    }
  };

  return (
    <>
      <div className="dob-pan-details-container">
       
        <div className="dob-input-container">
          <label htmlFor="dobDay" className="j11-label">Date of Birth:</label>
          <div className="dob-dropdowns">
            <input
              type="text"
              id="dobDay"
              placeholder="Day"
              value={dobDay}
              onChange={handleDobDayChange}
              className={!isDateValid ? 'error-input dob-input' : 'dob-input'}
            />
            <input
              type="text"
              id="dobMonth"
              placeholder="Month"
              value={dobMonth}
              onChange={handleDobMonthChange}
              className={!isDateValid ? 'error-input dob-input' : 'dob-input'}
            />
            <input
              type="text"
              id="dobYear"
              placeholder="Year"
              value={dobYear}
              onChange={handleDobYearChange}
              className="dob-input"
            />
          </div>
          {!isDateValid && (
            <p className="error-message">Please enter a valid date of birth.</p>
          )}
        </div>
        <div className="input-container">
          <label htmlFor="panNumber" className="j11-label">PAN Number:</label>
          <input
            type="text"
            id="panNumber"
            placeholder="Enter your PAN number"
            value={panNumber}
            onChange={handlePanNumberChange}
            className={!isPanNumberValid ? 'error-input pan-input' : 'pan-input'}
            
            required
          />
          {!isPanNumberValid && (
            <p className="error-message">Please enter a valid PAN number.</p>
          )}
        </div>
        <button onClick={handleNext} className="j11-btn">Next</button>
      </div>
    </>
  );
};

export default Journey11;
