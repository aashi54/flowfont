"use client"
import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './emicalculator.css'; 


const Page = () => {
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(5);
  const [loanTenure, setLoanTenure] = useState<number>(1);
  const [tenureType, setTenureType] = useState<string>('months');
  const [emi, setEmi] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);

  const handleLoanAmountChange = (event: Event, newValue: any ) => {
    setLoanAmount(newValue as number);
  };

  const handleInterestRateChange = (event: Event, newValue: any) => {
    setInterestRate(newValue as number);
  };

  const handleLoanTenureChange = (event: Event, newValue: any) => {
    setLoanTenure(newValue as number);
  };

  const handleTenureTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTenureType(event.target.value);
  };

  useEffect(() => {
    // Calculate EMI and total interest based on user inputs
    const principal = loanAmount;
    const rateOfInterest = interestRate / 100 / (tenureType === 'years' ? 12 : 1);
    const numberOfPayments = loanTenure * (tenureType === 'years' ? 12 : 1);

    const emiValue =
      (principal * rateOfInterest * Math.pow(1 + rateOfInterest, numberOfPayments))/(Math.pow(1 + rateOfInterest, numberOfPayments) - 1);

    setEmi(emiValue);
    const totalInterestValue = emiValue * numberOfPayments - principal;
    setTotalInterest(totalInterestValue);
  }, [loanAmount, interestRate, loanTenure, tenureType]);

  const data = [
    { name: 'Principal', value: loanAmount },
    { name: 'Interest', value: totalInterest },
  ];

  

  return (
    <div className='emi-container-1'>
    <div className='emi-calculator-container'>
      <Typography variant="h4" className="emi-heading">
        EMI Calculator
      </Typography>
      <div className='emi-content'>
        <div className='input-slider'>
      <div className="input-container">
        <FormControl>
          <Typography gutterBottom className='emi-input-text'>Loan Amount</Typography>
          <TextField
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            InputProps={{
              style: {
                color: 'white',  
                border: '1px solid white',  
                width: '300px',
              },
            }}
            
           
          />
          <Slider
            value={loanAmount}
            min={0}
            max={3000000} // 30 lakhs
            step={1000}
            valueLabelDisplay="auto"
            onChange={handleLoanAmountChange}
          
          />
        </FormControl>
      </div>
      <div className="input-container golden-border">
        <FormControl>
          <Typography gutterBottom className='emi-input-text'>Interest Rate</Typography>
          <TextField
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            InputProps={{
              style: {
                color: 'white',  
                border: '1px solid white',  
                width: '300px',
              },
            }}
          />
          <Slider
            value={interestRate}
            min={5}
            max={25}
            step={0.1}
            valueLabelDisplay="auto"
            onChange={handleInterestRateChange}
          />
        </FormControl>
      </div>
      <div className="input-container golden-border">
        <FormControl>
          <Typography gutterBottom className='emi-input-text'>Loan Tenure</Typography>
          <div className='year-month'>
          <FormControlLabel value="months" control={<Radio />} label="Months" />
            <FormControlLabel value="years" control={<Radio />} label="Years" />
            </div>
          <TextField
            value={loanTenure}
            onChange={(e) => setLoanTenure(Number(e.target.value))}
            InputProps={{
              style: {
                color: 'white',  
                border: '1px solid white',  
                width: '300px',
              },
            }}
          />
          <Slider
            value={loanTenure}
            min={1}
            max={tenureType === 'months' ? 60 : 5}
            step={1}
            valueLabelDisplay="auto"
            onChange={handleLoanTenureChange}
          />
          <RadioGroup
            aria-label="Loan Tenure Type"
            name="tenureType"
            value={tenureType}
            onChange={handleTenureTypeChange}
            row
          >
            {/* <FormControlLabel value="months" control={<Radio />} label="Months" />
            <FormControlLabel value="years" control={<Radio />} label="Years" /> */}
          </RadioGroup>
        </FormControl>
      </div>
      </div>

      {/* Display calculated EMI, total interest, and graph */}
      <div className='emi-output'>
      <Typography variant="h5" className="calculated-values-heading">
        Calculated Values:
      </Typography>
      <Typography className='calculated-emi'>EMI: {emi.toFixed(2)} INR</Typography>
      <Typography  className='calculated-emi'>Total Interest Payable: {totalInterest.toFixed(2)} INR</Typography>

      {/* <Typography variant="h5" className="loan-breakdown-heading">
        Loan Breakdown:
      </Typography> */}
      <ResponsiveContainer width={300} height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
             <Cell key={`cell-0`} fill="#FFA500" />
      <Cell key={`cell-1`} fill="#008000" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Page;

