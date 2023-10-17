"use client"
import React, {useState, useEffect} from 'react'
import './loanapp.css'
import Journey1 from '@/components/Journey/Journey1/Journey1'
import Journey2 from '@/components/Journey/Journey2/Journey2'
import Journey3 from '@/components/Journey/Journey3/Journey3'
import Journey4 from '@/components/Journey/Journey4/Journey4'
import Journey5 from '@/components/Journey/Journey5/Journey5'
import Journey6 from '@/components/Journey/Journey6/Journey6'
import Journey7 from '@/components/Journey/Journey7/Journey7'
import Journey8 from '@/components/Journey/Journey8/Journey8'
import Journey9 from '@/components/Journey/Journey9/Journey9'
import Journey10 from '@/components/Journey/Journey10/Journey10'
import Journey11 from '@/components/Journey/Journey11/Journey11'
import Journey12 from '@/components/Journey/Journey12/Journey12'


const Page = () => {
  const [step, setStep] = useState<number>(1);



  const [journeyData, setJourneyData] = useState<any>({
    journey1: '',
    journey2: '',
    journey3: '',
    journey4:'',
    journey5: '',
    journey6: '',
    journey7: '',
    journey8: '',
    journey10 : '',
    journey11 : '',
    journey12 :  ''

   
  });


  const handleJourneyData = (journeyName: string, data: any) => {
    setJourneyData((prevData:any) => ({
      ...prevData,
      [journeyName]: data,
    }));
  };


  const handleNext = () => {
    
    
    setStep(step + 1 as number);
    // console.log(dataFromJourney1, "  and  ", dataFromJourney2 );
  };



  useEffect(() => {
    // console.log('All Journey Data:', journeyData);
    const dataToSend = {
      employmentType: journeyData.journey1?.employmentType || '',
      yearlyIncome: journeyData.journey2?.yearlyIncome || '',
      bankName: journeyData.journey3?.selectedBank || '',
      employerName: journeyData.journey4?.employerName || '',
      state: journeyData.journey5?.selectedState || '',
      district: journeyData.journey5?.selectedDistrict || '',
      residenceType: journeyData.journey6?.residenceType || '',
      desiredLoanAmount: journeyData.journey7?.desiredLoanAmount || '',
      desiredLoanTenure : journeyData.journey7?.desiredLoanTenure || '',
      emailId : journeyData.journey8?.email || '',
      phoneNumber : journeyData.journey8?.phoneNumber || '',
      firstName : journeyData.journey10?.firstName || '',
      middleName : journeyData.journey10?.middleName || '',
      lastName : journeyData.journey10?.lastName || '',
      dob : journeyData.journey11?.dob || '',
      // dobMonth : journeyData.journey11?.dobMonth || '',
      // dobYear : journeyData.journey11?. dobYear || '',
      panNumber : journeyData.journey11?. panNumber || '',
      monthlyEMI : journeyData.journey12?.monthlyEMI || ''


    };
  



    if (step === 12) {
      // Make an API call to send all journey data to the backend
      console.log('All Journey Data:', dataToSend);
      fetch("/api/loan-applications", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })
        .then((response) => response.json())
        .then((responseData) => {
          // Handle the API response here
          console.log('Backend Response:', responseData);
        })
        .catch((error) => {
          // Handle any errors that occur during the API call
          console.error('API Error:', error);
        });
    }
  }, [step]);


  return (
   <>
     <div className="loan-app-container">
      <h1 className='apply-loan-heading1'>Apply For Personal Loan</h1>
     <div className="journies">
     {step === 1 ? (
          <div className="journey1">
            {/* <Journey8 onNext={handleNext} onData={(data) => handleJourneyData('journey8', data)}/> */}
            <Journey1 onNext={handleNext} onData={(data) => handleJourneyData('journey1', data)}/>
          </div>
        ) : step === 2 ? (
          <div className="journey1">
            <Journey7 onNext={handleNext} onData={(data) => handleJourneyData('journey7', data)}/>
          </div>
        ) : step === 3 ? (
          <div className="journey1">
            <Journey10 onNext={handleNext} onData={(data) => handleJourneyData('journey10', data)}/>
          </div>
        ) : step === 4 ? (
          <div className="journey1">
            <Journey8 onNext={handleNext}  onData={(data) => handleJourneyData('journey8', data)}/>
          </div>
        ) : step === 5 ? (
          <div className="journey1">
            <Journey11 onNext={handleNext} onData={(data) => handleJourneyData('journey11', data)}/>
          </div>
        ) : step === 6 ? (
          <div className="journey1">
            <Journey4 onNext={handleNext} onData={(data) => handleJourneyData('journey4', data)} />
          </div>
        ) : step === 7 ? (
          <div className="journey1">
            <Journey2 onNext={handleNext} onData={(data) => handleJourneyData('journey2', data)}/>
          </div>
        ) : step === 8 ? (
          <div className="journey1">
            <Journey12 onNext={handleNext} onData={(data) => handleJourneyData('journey12', data)}/>
          </div>
        ) : step === 9 ? (
          <div className="journey1">
            {/* <Journey9/> */}
            <Journey3 onNext={handleNext} onData={(data) => handleJourneyData('journey3', data)}/>
          </div>
        ) : step === 10 ? (
          <div className="journey1">
            {/* <Journey9/> */}
            <Journey5 onNext={handleNext} onData={(data) => handleJourneyData('journey5', data)}/>
          </div>
        ) : step === 11 ? (
          <div className="journey1">
            <Journey6 onNext={handleNext} onData={(data) => handleJourneyData('journey6', data)}/>
          </div>
        ) : step === 12 ? (
          <div className="journey1">
            {/* <Journey9/> */}
            <Journey9/>
          </div>
        ) : null}
     
      </div>
      </div>
   </>
  )
}

export default Page