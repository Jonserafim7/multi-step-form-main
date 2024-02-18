import React,{ useState, useEffect } from 'react'
import { plans, addOns } from './plansData'

import './MultiStepForm.scss'

import Nav from './components/Nav'
import StepOneForm from './components/StepOneForm'
import StepTwoForm from './components/StepTwoForm'
import StepThreeForm from './components/StepThreeForm'
import StepFourConfirmation from './components/StepFourConfirmation'
import Footer from './components/Footer'
import ConfirmationModal from './components/ConfirmationModal'

export default function MultiStepForm() {

  const [step, setStep] = useState(1)
  const [isStepOneComplete, setisStepOneComplete] = useState(false)
  const [isPlanConfirmed, setisPlanConfirmed] = useState(false)
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: {
      name: 'Arcade',
      monthlyPrice: 9,
      yearlyPrice: 90,
      yearlyBonus: 2
    },
    planBilling: {
      monthly: true, 
      yearly: false
    },
    addOn: [
      {
        name: 'Online Service',
        isChecked: false,
        monthlyPrice: 1,
        yearlyPrice: 10
      },
      {
        name: 'Larger Storage',
        isChecked: false,
        monthlyPrice: 2,
        yearlyPrice: 20
      },
      {
        name: 'Customizable Profile',
        isChecked: false,
        monthlyPrice: 2,
        yearlyPrice: 20
      }
    ]
  })

  function handleConfirmation() {
    setisPlanConfirmed(true)
    console.log('Plan confirmed')
    console.log('userData', userData)
  }

  function handleChange(event) {
    const { name, value } = event.target
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }



  function handleNextStep() {
    setStep(prevStep => prevStep + 1)
  }

  function handlePreviousStep() {
    setStep(prevStep => prevStep - 1)
  }

  function validadeName(name) {
    const re = /^[A-Za-z]+$/
    return re.test(String(name))
  }

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  function validatePhoneNumber(phoneNumber) {
    const re = /^\+\d{1,3}\s\d{1,3}\s\d{1,4}\s\d{1,4}$/;
    return re.test(String(phoneNumber));
  }

  function validateStepOne() {
    if (userData.name !== '' && userData.email !== '' && userData.phone !== '') {
      if (validadeName(userData.name) && validateEmail(userData.email) && validatePhoneNumber(userData.phone)) {
        setisStepOneComplete(true)
      }
    } else {
      setisStepOneComplete(false)
    }

  }

  useEffect(() => {
    validateStepOne()
}, [userData]);

  return (
    <div className={`MultiStepForm step${step}`}>
      <Nav 
        step={step} 
      />
      {step === 1 &&
        <StepOneForm 
          step={step} 
          setStep={setStep}
          userData={userData}
          setUserData={setUserData}
          handleChange={handleChange}
          validadeName={validadeName}
          validateEmail={validateEmail}
          validadePhoneNumber={validatePhoneNumber}
      />
      }
      {step === 2 &&
        <StepTwoForm 
          step={step} 
          userData={userData}
          setUserData={setUserData}
          plans={plans}
        />
      }

      {step === 3 &&
        <StepThreeForm 
          step={step} 
          userData={userData}
          setUserData={setUserData}
          plans={plans}
          addOns={addOns}
          handleChange={handleChange}
        />
      }

      {step === 4 && !isPlanConfirmed &&
        <StepFourConfirmation 
          step={step}
          setStep={setStep} 
          userData={userData}
          plans={plans}
          addOns={addOns}
        />
      }

      {isPlanConfirmed &&
        <ConfirmationModal 
          step={step}
          userData={userData}
          setUserData={setUserData}
          setStep={setStep}
        />
      }
      
      {!isPlanConfirmed &&
        <Footer
        step={step}  
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
        isStepOneComplete={isStepOneComplete}
        handleConfirmation={handleConfirmation}
      />
      }
      
    </div>
  )
}
