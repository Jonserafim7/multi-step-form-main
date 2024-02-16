import React, { useState, useEffect } from "react";
import { plans, addOns } from '../plansData'
import { PiToggleLeftFill, PiToggleRightFill } from "react-icons/pi";

export default function StepTwoForm(props) {

    function handleSubmit(event) {
        event.preventDefault()
    }

    function handlePlanChange() {
        
        props.setUserData(prevData => {
            if (props.userData.planBilling.monthly) {
                return {
                    ...prevData,
                    planBilling: {monthly: false, yearly: true}
                }
            }
            else if (props.userData.planBilling.yearly) {
                return {
                    ...prevData,
                    planBilling: {monthly: true, yearly: false}
                }
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} className={`step-2-form plan:${props.userData.plan} monthly:${props.userData.planBilling.monthly} yearly:${props.userData.planBilling.yearly}`}>
            <div className='form-header'>
                <h1>Select your plan</h1>
                <h2>
                    You have the option of monthly or yearly billing.
                </h2>
            </div>

            <div className="plans-container">
                {plans.map((plan, index) => {
                    return (
                        <label className={props.userData.plan === plan.name ? 'plan plan-highlight' : 'plan'} key={index} htmlFor={`step-${props.step}-plan-${index}`}>

                            <img src={plan.icon}/>

                            <div className='plan-info'>
                                <div>
                                <h3>{plan.name}</h3>
                                <p>${props.userData.planBilling.monthly ? `${plan.monthlyPrice}/mo` : `${plan.yearlyPrice}/yr`}</p>

                                </div>
                            </div>
                            
                            <input 
                                type='radio' 
                                name='plan' 
                                value={plan.name}
                                id={`step-${props.step}-plan-${index}`}
                                onChange={(event) => {props.handleChange(event)}}
                                className="plan-radio"
                            />
                        </label>
                    )
                })}
            </div>

            <button className="plan-billing-selector" onClick={handlePlanChange}>
                <p className={props.userData.planBilling.monthly ? "monthly-billing" : 'fade'}>Monthly</p>
                {props.userData.planBilling.monthly ? <PiToggleLeftFill className="monthly-icon"/> : <PiToggleRightFill className="yearly-icon"/>}
                <p className={props.userData.planBilling.yearly ? "yearly-billing" : 'fade'}>Yearly</p>
            </button>
        </form>
    )
}