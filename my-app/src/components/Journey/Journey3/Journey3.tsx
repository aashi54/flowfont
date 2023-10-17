// Journey3.tsx
"use client"
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './Journey3.css';

const useStyles = makeStyles((theme) => ({
  // Your styles here
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
  bankLogo: {
    width: '50px', // Adjust the width and height as needed
    height: '50px',
    marginRight: '10px', // Adjust spacing between logo and label
    verticalAlign: 'middle', // Align the logo vertically with the label
  },
}));

interface Bank {
  id: string;
  name: string;
 
}

const banks: Bank[] = [
  { id: 'hdfc', name: 'HDFC Bank'},
  { id: 'sbi', name: 'SBI'},
  { id: 'icici', name: 'ICICI Bank' },
  { id: 'kotak', name: 'Kotak Mahindra Bank'},
  { id: 'axis', name: 'Axis Bank' },
  {id:'allahabad bank', name: 'Allahabad bank'},
  { id: 'andhra', name: 'Andhra Bank'},
  { id: 'Bank of bahrain and kuwait', name: 'Bank of bahrain and kuwait'},
  { id: 'Bank of Baroda-corporate banking', name: 'Bank of Baroda-corporate banking' },
  { id: 'Bank of Baroda -Retail banking', name: 'Bank of Baroda -Retail banking'},
  { id: 'Bank of India', name: 'Bank of India' },
  {id:'Bank of Maharashtra', name: 'Bank of Maharashtra'},
  { id: 'Canara Bank', name: 'Canara Bank'},
  { id: 'Central Bank Of India', name: 'Central Bank Of India'},
  { id: 'City Union Bank', name: 'City Union Bank' },
  { id: 'Corporation Bank', name: 'Corporation Bank'},
  { id: 'Deutsche Bank', name: 'Deutsche Bank' },
  { id: 'Development Credit Bank', name: 'Development Credit Bank'},
  { id: 'Dhanlaxmi Bank', name: 'Dhanlaxmi Bank'},
  { id: 'Federal Bank', name: 'Federal Bank' },
  { id: 'ICICI Bank', name: 'ICICI Bank'},
  { id: 'IDBI Bank', name: 'IDBI Bank' },
  { id: 'Indian Overseas Bank', name: 'Indian Overseas Bank'},
  { id: 'IndusInd Bank', name: 'IndusInd Bank'},
  { id: 'ING Vysya Bank', name: 'ING Vysya Bank' },
  { id: 'Jammu and Kashmir Bank', name: 'Jammu and Kashmir Bank'},
  { id: 'Karnataka Bank Ltd', name: 'Karnataka Bank Ltd' },
  { id: 'Karur Vysya Bank', name: 'Karur Vysya Bank'},
  { id: 'Kotak Bank', name: 'Kotak Bank'},
  { id: 'Laxmi Vilas Bank', name: 'Laxmi Vilas Bank' },
  { id: 'Oriental Bank Commerce', name: 'Oriental Bank Commerce'},
  { id: 'Punjab National Bank - Corporate Banking', name: 'Punjab National Bank - Corporate Banking' },
  { id: 'Punjab National Bank - Retail Banking', name: 'Punjab National Bank - Retail Banking'},
  { id: 'Punjab & Sind Bank', name: 'Punjab & Sind Bank'},
  { id: 'Shamro Vitthal Co-operative Bank', name: 'Shamro Vitthal Co-operative Bank' },
  { id: 'South Indian Bank', name: 'South Indian Bank'},
  { id: 'State Bank of Bikaner & Jaipur', name: 'State Bank of Bikaner & Jaipur' },
  { id: 'State Bank of Hyderabad', name: 'State Bank of Hyderabad'},
  { id: 'state Bank of India', name: 'state Bank of India'},
  { id: 'State Bank of Mysore', name: 'State Bank of Mysore' },
  { id: 'State Bank of Patiala', name: 'State Bank of Travancore'},
  { id: 'Syndicate Bank', name: 'Syndicate Bank' },
  { id: 'Tamilnad Mercantile Bank Ltd', name: 'Tamilnad Mercantile Bank Ltd'},
  { id: 'UCO Bank', name: 'UCO Bank' },
  { id: 'Union Bank of India', name: 'Union Bank of India'},
  { id: 'United Bank of India', name: 'United Bank of India' },
  { id: 'Vijaya Bank', name: 'Vijaya Bank' },
  { id: 'Yes Bank Ltd', name: 'Yes Bank Ltd'},
];

const Journey3 = ({ onNext, onData }: { onNext: () => void; onData: (data: any) => void }) => {
  const classes = useStyles();
  const [selectedBank, setSelectedBank] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredBanks, setFilteredBanks] = useState<Bank[]>([]);
  const [previousValue, setPreviousValue] = useState<string>('');

  useEffect(() => {
    const handleBackspace = (event: KeyboardEvent) => {
      if (event.key === 'Backspace' && searchTerm === '' && previousValue !== '') {
        setSearchTerm(previousValue);
      }
    };

    window.addEventListener('keydown', handleBackspace);
   
    if (searchTerm === '') {
        setFilteredBanks([]); 
      } else {
        const filtered = banks.filter((bank) => bank.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredBanks(filtered);
      }

    return () => {
      window.removeEventListener('keydown', handleBackspace);
    };
  }, [searchTerm, previousValue]);

  const handleChange = (event: any) => {
   
    const value = event.target.value;
    setPreviousValue(value);
    setSearchTerm(value.toLowerCase());
    if (value === '') {
        setFilteredBanks([]); 
      } else {
        const filtered = banks.filter((bank) => bank.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredBanks(filtered);
      }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = banks.filter((bank) => bank.name.toLowerCase().includes(term));
    setFilteredBanks(filtered);
  };

  const handleBankSelection = (selectedBank: Bank) => {
    setSelectedBank(selectedBank.id); // Use selectedBank.id to set the selected bank
  setSearchTerm(selectedBank.name);
  };

  const handleNext = () => {
    if (selectedBank) {
      // Send data to the parent component using onData callback
      onData({selectedBank})
      onNext();
    } else {
      alert('Please select a bank before proceeding.');
    }
  };

  return (
    <>
      <div className='bank-selection-container'>
        <Typography variant="h5" gutterBottom style={{
           fontSize : '20px',
           fontWeight : 'bold',
           marginTop: '25px',
         
        }}>
          Salary Bank Account
        </Typography>
        <input
          type="text"
          placeholder="Search for a bank..."
          value={searchTerm}
          onChange={handleSearchChange}
          className='j3-search'
        />
        <Grid container spacing={2}>
          <div className='bank-grids'>
            {filteredBanks.map((bank) => (
              <div key={bank.id} className="bank-grid">
                <FormControlLabel
                  value={bank.id}
                  control={
                    <Radio
                      color="primary"
                      classes={{
                        root: classes.goldRadio,
                        checked: classes.checked,
                      }}
                      onClick={() => handleBankSelection(bank)}
                    />
                  }
                  label={bank.name
                 }
                  onChange={handleChange}
                  checked={selectedBank === bank.id}
                />
              </div>
            ))}
            {/* {filteredBanks.length === 0 && searchTerm === '' && (
              <div className='no-banks-found'>No banks found</div>
            )} */}
          </div>
        </Grid>
        <button onClick={handleNext} className='j3-btn'>Next</button>
      </div>
    </>
  );
};

export default Journey3;
