import React, { useState, useEffect } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";

export default function StepOneForm(props) {

    function handleSubmit(event) {
        event.preventDefault()
    }


    return (
        <form className='step-1-form' onSubmit={handleSubmit}>
            <div className='form-header'>
                <h1>Personal Info</h1>
                <h2>
                    Please provide your name, 
                    email adress and phone number.
                </h2>
            </div>

            <div className='form-inputs'>

                <div className='input-container'>
                    <div className='label-container'>
                        <label htmlFor='name'>Name</label>
                        {props.validadeName(props.userData.name) === false &&  props.userData.name != '' ?
                        <p className='validation-error-message'>Please enter a valid name</p> : ''}
                        {props.validadeName(props.userData.name) &&  props.userData.name != '' ?
                        <FaRegCheckCircle /> : ''}
                    </div>
                    <input
                        className={props.validadeName(props.userData.name) === false &&  props.userData.name != '' ? 
                         'red-border' : ''}
                        type='text' 
                        placeholder='e.g Stephhen King'
                        name='name'
                        value={props.userData.name}
                        id={`step-${props.step}-name`}
                        onChange={(event) => {props.handleChange(event)}}
                        />
                </div>

                <div className='input-container'>
                    <div className='label-container'>
                        <label htmlFor='email'>Email Adress</label>
                        {props.validateEmail(props.userData.email) === false &&  props.userData.email != '' ?
                        <p className='validation-error-message'>Please enter a valid email</p> : ''}
                        {props.validateEmail(props.userData.email) &&  props.userData.email != '' ?
                        <FaRegCheckCircle /> : ''}
                    </div>
                    <input
                        className={props.validateEmail(props.userData.email) === false &&  props.userData.email != '' ? 
                        'red-border' : ''} 
                        type='email' 
                        placeholder='e.g. stephenking@lorem.com'
                        name='email'
                        value={props.userData.email}
                        id={`step-${props.step}-email`}
                        onChange={(event) => {props.handleChange(event)}} 
                    />
                    {/* <p className='user-input-missing-message'>Please enter a valid email</p> */}
                </div>

                <div className='input-container'>
                    <div className='label-container'>
                        <label htmlFor='phone'>Phone Number</label>
                        {props.validadePhoneNumber(props.userData.phone) === false &&  props.userData.phone != '' ?
                        <p className='validation-error-message'>Please enter a valid phone</p> : ''}
                        {props.validadePhoneNumber(props.userData.phone) &&  props.userData.phone != '' ?
                        <FaRegCheckCircle /> : ''}
                    </div>
                    <input
                        className={props.validadePhoneNumber(props.userData.phone) === false &&  props.userData.phone != '' ? 
                        'red-border' : ''} 
                        type='tel' 
                        placeholder='e.g. +1 234 567 890' 
                        name='phone'
                        value={props.userData.phone}
                        id={`step-${props.step}-phone`}
                        onChange={(event) => {props.handleChange(event)}} 
                    />
                    {/* <p className='user-input-missing-message'>Please enter a valid phone</p> */}
                </div>
            </div>

            
        </form>
    )
}