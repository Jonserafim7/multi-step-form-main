import React from "react";

export default function StepFourConfirmation( { userData, setStep }) {

    const selectedAddOnsTotalPrice = userData.addOn.reduce((acc, addOn) => {
        return (
            addOn.isChecked ? 
            acc + (userData.planBilling.monthly ? addOn.monthlyPrice : addOn.yearlyPrice) : 
            acc
        )
    }, 0)

    return (
        <form className="step-4-confirmation">

            <div className='form-header'>
                <h1>Finishing up</h1>
                <h2>
                    Double-check if eveything looks OK
                    before confirming.
                </h2>
            </div>

            <div className="confirmation-container">
                <div className="plan-confirmation-container">
                    <div>
                        <p>
                            {`${userData.plan.name} 
                            (${userData.planBilling.monthly ? 'Monthly' : 'Yearly'})`}
                        </p>
                        <button onClick={() => setStep(2)}>Change</button>
                    </div>
                    <p className="confirm-plan-price">
                        {userData.planBilling.monthly ? 
                        `${userData.plan.monthlyPrice}/mo` : 
                        `${userData.plan.yearlyPrice}/yr`}
                    </p>
                </div>

                <div className="add-on-confirmation-container">
                    {userData.addOn.map((addOn, index) => {
                        return addOn.isChecked ? 
                        <div className="confirm-add-on" key={index}>
                            <p className="confirm-add-on-name">
                                {addOn.name}
                            </p>
                            <p className="confirm-add-on-price">
                                {userData.planBilling.monthly ? 
                                `+${addOn.monthlyPrice}/mo` : 
                                `+${addOn.yearlyPrice}/yr`}
                            </p>
                        </div> : 
                        null
                    })}
                </div>

            </div>

            <div className="confirm-total">
                <p>
                    {userData.planBilling.monthly ? 'Total (per month)' : 'Total (per year)'}
                </p>
                <p className="total-price">
                    {userData.planBilling.monthly ? 
                    userData.plan.monthlyPrice + selectedAddOnsTotalPrice + '/mo' 
                    : userData.plan.yearlyPrice + selectedAddOnsTotalPrice + '/yr'}
                </p>
            </div>
        </form>
    )
}