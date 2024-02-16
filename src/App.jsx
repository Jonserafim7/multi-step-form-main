import React,{ useState, useEffect } from 'react'
import { plans, addOns } from './plansData'

import './App.scss'

import Nav from './components/Nav'
import StepOneForm from './components/StepOneForm'
import StepTwoForm from './components/StepTwoForm'
import Footer from './components/Footer'

function App() {

  const [step, setStep] = useState(1)
  const [isStepOneComplete, setisStepOneComplete] = useState(false)
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    planBilling: {monthly: true, yearly: false},
    plan: 'Arcade',
    addOns: {}
  })
  

  function handleNextStep() {
    setStep(prevStep => prevStep + 1)
  }

  function handlePreviousStep() {
    setStep(prevStep => prevStep - 1)
  }

  function handleChange(event) {
    const { name, value } = event.target
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }))
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
    <div className={`app step${step}`}>
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
          handleChange={handleChange}
        />
      }
      
      <Footer
        step={step}  
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
        isStepOneComplete={isStepOneComplete}
      />
    </div>
  )
}

export default App
