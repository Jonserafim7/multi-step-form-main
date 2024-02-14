import React from "react";

export default function Footer(props) {
    return (
        <footer>
            
            <div className="step-change-btns-container">
                {props.step > 1 && <button 
                    className='previous-step-btn'
                    onClick={props.handlePreviousStep}>   
                    Back
                </button>}
                <button 
                    className='next-step-btn' 
                    onClick={props.handleNextStep}> 
                    Next Step
                </button> 
            </div>
        </footer>
    )
}