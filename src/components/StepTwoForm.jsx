import React from "react";
import { PiToggleLeftFill, PiToggleRightFill } from "react-icons/pi";

export default function StepTwoForm( { userData, setUserData, step, plans}) {

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handlePlanBillingChange() {
        setUserData(prevData => {
            if (userData.planBilling.monthly) {
                return {
                    ...prevData,
                    planBilling: {monthly: false, yearly: true}
                }
            }
            else if (userData.planBilling.yearly) {
                return {
                    ...prevData,
                    planBilling: {monthly: true, yearly: false}
                }
            }
        })
    }

    const handlePlanChange = (event) => {
        const { name, value } = event.target;
        const selectedPlan = JSON.parse(value); // Assuming the value is a stringified plan object
    
        setUserData(prevState => ({
          ...prevState,
          [name]: selectedPlan
        }));
      };
    
    const plansElements = plans.map((plan, index) => {
            return (
                <label 
                    className={plan.name === userData.plan.name ? 
                    'selected form-input' : 'form-input'} 
                    key={index} 
                    htmlFor={`step-${step}-plan-${index}`}>

                    <img src={plan.icon}/>

                    <div className='plan-info'>
                        <h3>{plan.name}</h3>
                        <p className="plan-price">
                            ${userData.planBilling.monthly ? 
                            `${plan.monthlyPrice}/mo` : 
                            `${plan.yearlyPrice}/yr`}
                        </p>
                        {userData.planBilling.monthly ? null : 
                        <p className="plan-yearly-bonus">{plan.yearlyBonus} months free</p>}
                    </div>
                    
                    <input 
                        type='radio' 
                        name='plan' 
                        value={JSON.stringify(plan)}
                        id={`step-${step}-plan-${index}`}
                        className="plan-radio"
                        onChange={(event) => {handlePlanChange(event)}}
                    />
                </label>
            )
        })

    return (
        <form className='step-2-form' onSubmit={handleSubmit}>

            <div className='form-header'>
                <h1>Select your plan</h1>
                <h2>
                    You have the option of monthly or yearly billing.
                </h2>
            </div>

            <div className="form-inputs-container">
                {plansElements}   
            </div>

            <button 
                className="plan-billing-selector" 
                onClick={handlePlanBillingChange}>

                <p className={userData.planBilling.monthly ? "monthly-billing" : 'fade'}>
                    Monthly
                </p>

                {userData.planBilling.monthly ? 
                <PiToggleLeftFill className="monthly-icon"/> : 
                <PiToggleRightFill className="yearly-icon"/>}

                <p className={userData.planBilling.yearly ? "yearly-billing" : 'fade'}>
                    Yearly
                </p>
            </button>
        </form>
    )
}