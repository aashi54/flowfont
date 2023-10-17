import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import './Journey10.css';

const Journey10 = ({
  onNext,
  onData,
}: {
  onNext: () => void;
  onData: (data: any) => void;
}) => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setFirstName(inputValue);
    setIsFirstNameValid(true); // Reset validation
  };

  const handleMiddleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setMiddleName(inputValue);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setLastName(inputValue);
  };

  const handleNext = () => {
    if (firstName.trim() !== '') {
      // Send data to the parent component
      onData({ firstName, middleName, lastName });
      onNext();
    } else {
      setIsFirstNameValid(false);
    }
  };

  return (
    <>
      <div className="name-details-container">
       
        <div className="input-container">
          <label htmlFor="firstName" className="j10-label">First Name:</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            value={firstName}
            onChange={handleFirstNameChange}
            className={!isFirstNameValid ? 'error-input name-input' : 'name-input'}
            required
          />
          {!isFirstNameValid && (
            <p className="error-message">First name is required.</p>
          )}
        </div>
        <div className="input-container">
          <label htmlFor="middleName" className="j10-label">Middle Name:</label>
          <input
            type="text"
            id="middleName"
            placeholder="Enter your middle name"
            value={middleName}
            onChange={handleMiddleNameChange}
            className="name-input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="lastName" className="j10-label">Last Name:</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            value={lastName}
            onChange={handleLastNameChange}
            className="name-input"
          />
        </div>
        <button onClick={handleNext} className="j10-btn">Next</button>
      </div>
    </>
  );
};

export default Journey10;
