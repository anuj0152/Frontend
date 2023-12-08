import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { KeyboardArrowLeft } from '@mui/icons-material'
import CustomizedSteppers from '../Common/stepper'
import ContactDetails from './contactDetails'
import PersonalDetails from './personalDetails'
import KYC from './kyc'
import Header from '../Common/header'

const Investor = () => {
  const [activeStep, setActiveStep] = useState(0)

  const resolveActiveScreen = () => {
    switch (activeStep) {
      case 0:
        return (
          <ContactDetails handleNext={handleNext} handleBack={handleBack} />
        )
      case 1:
        return (
          <PersonalDetails handleNext={handleNext} handleBack={handleBack} />
        )
      case 2:
        return <KYC />
      default:
        break
    }
  }

  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep((activeStep) => activeStep + 1)
    }
  }

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((activeStep) => activeStep - 1)
    }
  }

  return (
    <div className='relative bg-[#F4F4FF]'>
      <div>
        <Header />
      </div>

      <div className='absolute bottom-0 left-0'>
        <img
          className='w-[546px] h-[493px]'
          src='imgs/investorForm.png'
          alt='moneyImag'
        />
      </div>
      <div className='pt-[52px] pl-[70px] pr-[165px] '>
        <Grid container spacing={2}>
          <Grid className='mt-[132px]' item xs={5}>
            <div className='absolute top-0 right-0 left-0'></div>
            <div>
              <KeyboardArrowLeft />
              <span className='text-xl font-base'>Become an investor</span>
            </div>
            <div className='w-[274px] text-[50px] mt-[37px] font-normal leading-[56px]'>
              Hello investor!
            </div>
            <p className='mt-[18px] text-[20px] text-[#5D5D70] font-normal w-[259px]'>
              Ready to make your money work for you?
            </p>
          </Grid>
          <Grid item xs={7}>
            <div className='bg-white rounded-2xl mb-6 px-11 py-6 shadow-md'>
              <CustomizedSteppers count={3} activeStep={activeStep} />
              {resolveActiveScreen()}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Investor
