import React,{ useState, useEffect } from 'react'
import { plans, addOns } from './plansData'

import './App.scss'

import Nav from './components/Nav'
import StepOneForm from './components/StepOneForm'
import Footer from './components/Footer'

function App() {

  const [step, setStep] = useState(1)
  const [isStepOneComplete, setisStepOneComplete] = useState(false)
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    planType: '',
    plan: {},
    addOns: {}
  })
  const nameRegex = /^[A-Za-z]+$/

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
    <div className='app'>
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
      
      <Footer
        step={step}  
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
        isStepOneComplete={isStepOneComplete}
        nameRegex={nameRegex}
      />
    </div>
  )
}

export default App
