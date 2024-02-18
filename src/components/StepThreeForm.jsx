import React, { useState, useEffect } from "react";

export default function StepThreeForm( {addOns, userData, handleCheckedAddOn, step, setUserData}) {

    function handleCheckedAddOn(event, index) {
        const { checked } = event.target
        setUserData(prevData => {
          const newAddOn = prevData.addOn.map((addOn, i) => {
            if (i === index) {
              return {
                ...addOn,
                isChecked: checked
              }
            }
            return addOn
          })
          return {
            ...prevData,
            addOn: newAddOn
          }
        })
      }

    function findCurrentAddon(addOn) {
        return userData.addOn.filter(item => item.name === addOn.name)[0]
    }  

    const addonElements = addOns.map((addOn, index) => {
        return (
            <label 
                className={findCurrentAddon(addOn).isChecked ? 
                'add-on selected' : 
                'add-on'} 
                key={index} 
                htmlFor={`step-${step}-add-on-${index}`}>

                <input 
                    type='checkbox' 
                    name={'addOn'}
                    checked={findCurrentAddon(addOn).isChecked} 
                    id={`step-${step}-add-on-${index}`}
                    onChange={(event) => {handleCheckedAddOn(event, index)}}
                    className="add-on-checkbox"
                />

                <div className='add-on-info'>
                    <h3>{addOn.name}</h3>
                    <p className="add-on-description">{addOn.description}</p>
                </div>

                <p className="add-on-price">
                    ${userData.planBilling.monthly ? `${addOn.monthlyPrice}/mo` : `${addOn.yearlyPrice}/yr`}
                </p>
            </label>
        )
    })

    return (
        <form className="step-3-form">
            <div className='form-header'>
                <h1>Pick add-ons</h1>
                <h2>
                    Add-ons help enhance your gaming experience.
                </h2>
            </div>

            <div className="form-inputs-container">
                {addonElements}  
            </div>
        </form>
    )
}