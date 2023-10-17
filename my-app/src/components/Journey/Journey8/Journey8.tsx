import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import './Journey8.css'

const Journey8 = ({
  onNext,
  onData,
}: {
  onNext: () => void;
  onData: (data: any) => void;
}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setPhoneNumber(inputValue);
    setIsValidPhoneNumber(true); // Reset validation
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    setIsValidEmail(true); // Reset validation
  };

  const handleNext = () => {
    const isValidPhone = /^[0-9]{10}$/.test(phoneNumber);
    const isValidEmailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      email
    );

    if (isValidPhone && isValidEmailFormat) {
      // Send data to the parent component
      onData({ phoneNumber, email });
      onNext();
    } else {
      if (!isValidPhone) {
        setIsValidPhoneNumber(false);
      }
      if (!isValidEmailFormat) {
        setIsValidEmail(false);
      }
    }
  };

  return (
    <>
      <div className="contact-details-container">
        <Typography variant="h5" gutterBottom style={{
            fontSize : '25px',
            fontWeight : 'bold'
        }}>
          Contact Details
        </Typography>
        <div className="input-container">
          <label htmlFor="phoneNumber" className='j8-label'>Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className={!isValidPhoneNumber ? 'error-input contact-input' : 'contact-input'}
          />
          {!isValidPhoneNumber && (
            <p className="error-message">Please enter a valid phone number.</p>
          )}
        </div>
        <div className="input-container">
          <label htmlFor="email" className='j8-label'>Email Id:</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email Id"
            value={email}
            onChange={handleEmailChange}
            className={!isValidEmail ? 'error-input contact-input' : 'contact-input'}
          />
          {!isValidEmail && (
            <p className="error-message">Please enter a valid emailId.</p>
          )}
        </div>
        <button onClick={handleNext} className='j8-btn'>Next</button>
      </div>
    </>
  );
};

export default Journey8;
