"use client"
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useMediaQuery } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import './Journey1.css'

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '2px solid gold', // Border color when selected
      '&:hover': {
        borderColor: 'gold', // Border color on hover
      },
    },
    selected: {
      borderColor: 'gold', // Border color when selected
    },
    goldRadio: {
      '&$checked': {
        color: 'gold', // Color for the checked radio button
      },
    },
    checked: {}, // Needed for overriding the checked style
  }));



const Journey1 = ({
  onNext,
  onData, // Function to send data to the parent component
}: {
  onNext: () => void;
  onData: (data: any) => void;
}) => {
  const classes = useStyles();
  const [employmentType, setEmploymentType] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event : any) => {
    setSelectedValue(event.target.value);
    setEmploymentType(event.target.value);
  };



  const handleNext = () => {
    if (employmentType) {
      // Send data to the parent component
      onData({ employmentType });
      onNext();
    } else {
      alert('Please select an employment type before proceeding.');
    }
  };

  return (
    <>
    <div className='emp-type-container'>
    {/* <Paper
    className={`${classes.paper} ${employmentType === 'salaried' ? classes.selected : ''}`}
    elevation={3}
  > */}
   <Typography
      variant="h5"
      gutterBottom
      style={{
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '15px',
        marginLeft: '-50px',
      }}
      className="l1-heading"
    >
      Employment Type
    </Typography>
    <Grid container spacing={2}>
        <div className='salary-grids'>
          <div className="salary-grid">
      <Grid item xs={12}> 
        <FormControlLabel
          value="salaried"
          control={
            <Radio
              color="primary"
              classes={{
                root: classes.goldRadio, // Apply gold color
                checked: classes.checked, // Override checked style
              }}
            />
          }
          label="Salaried"
          
          onChange={handleChange}
          checked={employmentType === 'salaried'}
        />
      </Grid></div>
      <div className="salary-grid">
      <Grid item xs={12}> 
        <FormControlLabel
          value="self-employed-business"
          control={
            <Radio
              color="primary"
              classes={{
                root: classes.goldRadio, // Apply gold color
                checked: classes.checked, // Override checked style
              }}
            />
          }
          label="Self-Employed (Business)"
          onChange={handleChange}
          checked={employmentType === 'self-employed-business'}
        />
      </Grid></div>
      <div className="salary-grid">
      <Grid item xs={12}> 
        <FormControlLabel
          value="self-employed-professional"
          control={
            <Radio
              color="primary"
              classes={{
                root: classes.goldRadio, // Apply gold color
                checked: classes.checked, // Override checked style
              }}
            />
          }
          label="Self-Employed (Professional)"
          onChange={handleChange}
          checked={employmentType === 'self-employed-professional'}
        />
      </Grid> 
      
      </div>
      <button onClick={handleNext} className='j1-btn'>Next</button>
      </div>
    </Grid>
    {/* {isMobile && (
      <Typography variant="body2">
        Select your employment type to proceed.
      </Typography>
    )} */}
  {/* </Paper> */}
  </div>
  </>
  );
};

export default Journey1;
