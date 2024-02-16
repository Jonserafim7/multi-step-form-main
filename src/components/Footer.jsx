import React from "react";

export default function Footer(props) {

    return (
        <footer>
            <div className="footer-container">
                <div className='form-buttons'>
                    {props.step > 1 && <button 
                        className='previous-step-btn'
                        onClick={props.handlePreviousStep}
                        >   
                        Go Back
                    </button>}
                    <button 
                        className={props.isStepOneComplete ? 'next-step-btn' : 'next-step-btn disabled'} 
                        onClick={props.handleNextStep}
                        disabled={!props.isStepOneComplete}
                        > 
                        Next Step
                    </button> 
                </div>
            </div>
        </footer>
    )
}