import React, { useState, useEffect } from "react";

export default function StepThreeForm(props) {
    return (
        <form className="step-3-form">
            <div className='form-header'>
                <h1>Pick add-ons</h1>
                <h2>
                    Add-ons help enhance your gaming experience.
                </h2>
            </div>

            <div className="add-ons-container">
                {props.addOns.map((addOn, index) => {
                    return (
                        
                        <label className={`add-on name:${props.userData.addOn.filter(item => item.name === addOn.name)[0].name} checked:${props.userData.addOn.filter(item => item.name === addOn.name)[0].isChecked}`} key={index} htmlFor={`step-${props.step}-add-on-${index}`}>

                            <input 
                                type='checkbox' 
                                name={'addOn'}
                                checked={props.userData.addOn.filter(item => item.name === addOn.name)[0].isChecked}
                                id={`step-${props.step}-add-on-${index}`}
                                onChange={(event) => {props.handleCheckedAddOn(event, index)}}
                                className="add-on-checkbox"
                            />

                            <div className='add-on-info'>
                                <h3>{addOn.name}</h3>
                                <p className="add-on-description">{addOn.description}</p>
                            </div>

                            <p className="add-on-price">${props.userData.planBilling.monthly ? `${addOn.monthlyPrice}/mo` : `${addOn.yearlyPrice}/yr`}</p>
                            
                        </label>
                    )
                })}
            </div>
        </form>
    )
}