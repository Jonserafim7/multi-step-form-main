import React from 'react'

export default function Nav(props) {
    return (
        <nav>
            <div className='nav-container'>
                <div className='nav-step-container'>
                    <div 
                        className={props.step === 1 ? 
                        `step-count highlight-step-count` : 
                        'step-count'} >
                            1
                    </div>
                    <div className='nav-step-text'>
                        <h3 className='step-counter'>Step 1</h3>
                        <h3 className='step-description'>Your Personal Info</h3>
                    </div>
                </div>

                <div className='nav-step-container'>
                    <div 
                        className={props.step === 2 ? 
                        `step-count highlight-step-count` : 
                        'step-count'}>
                            2
                    </div>
                    <div className='nav-step-text'>
                        <h3 className='step-counter'>Step 2</h3>
                        <h3 className='step-description'>Select a Plan</h3>
                    </div>
                </div>
                <div className='nav-step-container'>
                    <div 
                        className={props.step === 3 ? 
                        `step-count highlight-step-count` : 
                        'step-count'}>
                            3
                    </div>
                    <div className='nav-step-text'>
                        <h3 className='step-counter'>Step 3</h3>
                        <h3 className='step-description'>Add-ons</h3>
                    </div>
                </div>

                <div className='nav-step-container'>
                    <div 
                        className={props.step === 4 ? 
                        `step-count highlight-step-count` : 
                        'step-count'}>
                            4
                    </div>
                    <div className='nav-step-text'>
                        <h3 className='step-counter'>Step 4</h3>
                        <h3 className='step-description'>Confirmation</h3>
                    </div>
                </div>
            </div>
        </nav>
    )
}