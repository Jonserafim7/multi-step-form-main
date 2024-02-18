import React, { useState, useEffect } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";

export default function StepOneForm( {step, userData, handleChange, validadeName, validateEmail, validadePhoneNumber}) {

    const { name, email, phone } = userData

    function inputValidationMessage(validationFunction, userInput, inputType) {
        if (validationFunction(userInput) === false &&  userInput != '') {
            return <p className='validation-error-message'>Please enter a valid {inputType}</p>
        }
        else if (validationFunction(userInput) &&  userInput != '') {
            return <FaRegCheckCircle />
        }
    }

    function inputsData() {
        return [
            {
                label: 'Name',
                type: 'text',
                placeholder: 'e.g Stephhen King',
                name: 'name',
                value: name,
                id: `step-${step}-name`,
                validationFunction: validadeName
            },
            {
                label: 'Email Adress',
                type: 'email',
                placeholder: 'e.g. stephenking@lorem.com',
                name: 'email',
                value: email,
                id: `step-${step}-email`,
                validationFunction: validateEmail

            },
            {
                label: 'Phone Number',
                type: 'tel',
                placeholder: 'e.g. +1 234 567 890',
                name: 'phone',
                value: phone,
                id: `step-${step}-phone`,
                validationFunction: validadePhoneNumber
            }
        ]
    }

    const inputElements = inputsData().map((input, index) => {
        return (
            <div className='input-elements' key={index}>
                <div className='label-container'>
                    <label htmlFor={input.name}>{input.label}</label>
                    {inputValidationMessage(input.validationFunction, input.value, input.label)}
                </div>
                <input
                    className={input.validationFunction(input.value) === false &&  input.value != '' ? 
                    'red-border' : 'form-input'} 
                    type={input.type} 
                    placeholder={input.placeholder}
                    name={input.name}
                    value={input.value}
                    id={input.id}
                    onChange={(event) => {handleChange(event)}} 
                />
            </div>
        )
    });

    return (
        <form className='step-1-form'>
            <div className='form-header'>
                <h1>Personal Info</h1>
                <h2>
                    Please provide your name, 
                    email adress and phone number.
                </h2>
            </div>
            <div className='form-inputs-container'>
                {inputElements}
            </div>
        </form>
    )
}