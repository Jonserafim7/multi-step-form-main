import React from 'react'

export default function Form(props) {
    return (
        <form>
            <div className='form-header'>
                <h1>Personal Info</h1>
                <h2>Please provide your name, email adress and phone number.</h2>
            </div>

            <div className='form-inputs'>

                <label htmlFor='name'>Name</label>
                <input 
                    type='text' 
                    placeholder='e.g Stephhen King'
                    name='name'
                    value={props.name}
                    id={`step-${props.step}-name`}   
                />

                <label htmlFor='email'>Email Address</label>
                <input 
                    type='email' 
                    placeholder='e.g. stephenking@lorem.com'
                    name='email'
                    value={props.email}
                    id={`step-${props.step}-email`}
                />

                <label htmlFor='phone'>Phone Number</label>
                <input 
                    type='tel' 
                    placeholder='e.g. +1 234 567 890' 
                    name='phone'
                    value={props.phone}
                    id={`step-${props.step}-phone`}
                />
            </div>
        </form>
    )
}