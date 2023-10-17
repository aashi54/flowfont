

"use client"
import { useState } from 'react';
import "./Journey6.css"

const Journey6 = ({ onNext, onData }: { onNext: () => void; onData: (data: any) => void }) => {
  const [residenceType, setResidenceType] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const residenceTypes = [
    'Owned by self/Spouse',
    'Owned by parents/siblings',
    'Rented with family/stay alone',
    'Paying Guest/Hostel',
    'Company provided',
    'Rented with Friend'
  ];

  const handleResidenceTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResidenceType(e.target.value);
    setError(null); // Clear any previous error
  };

  const handleNext = () => {
    if (!residenceType) {
      setError('Please select a residence type');
    } else {
      // Send data to the parent component using onData callback
      onData({ residenceType });
      onNext();
    }
  };

  return (
    <div className='formContainer6'>
      <h2>Residence Type</h2>
      <div className="residenceTypes">
        {residenceTypes.map((type) => (
          <div key={type} className="radioContainer6">
            <input
              type="radio"
              id={type}
              name="residenceType"
              value={type}
              onChange={handleResidenceTypeChange}
              checked={residenceType === type}
              
            />
            <label htmlFor={type} className='j6-label'>{type}</label>
          </div>
        ))}
      </div>
      {error && <p className="error">{error}</p>}
      <button onClick={handleNext} className="j6-btn">
        Submit
      </button>
    </div>
  );
};

export default Journey6;
