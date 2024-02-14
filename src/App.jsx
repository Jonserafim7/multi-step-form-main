import React,{ useState, useEffect } from 'react'
import './App.scss'

import Nav from './components/Nav'
import Form from './components/Form'
import Footer from './components/Footer'

function App() {

  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    cardExp: '',
    cardCvv: '',
  })

  function handleNextStep() {
    setStep(prevStep => prevStep + 1)
  }

  function handlePreviousStep() {
    setStep(prevStep => prevStep - 1)
  }

  return (
    <div className='app'>
      <Nav 
        step={step} 
      />
      <Form 
        step={step} 
        userData={userData}
        setUserData={setUserData}
      />
      <Footer 
        step={step} 
        setStep={setStep}
        userData={userData}
        setUserData={setUserData}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
      />
    </div>
  )
}

export default App
