import React from 'react'

export default function Nav(props) {
    return (
        <nav>
            <div className='nav-container'>
                <div className={props.step === 1 ? `step highlight-step` : 'step'} >1</div>
                <div className={props.step === 2 ? `step highlight-step` : 'step'}>2</div>
                <div className={props.step === 3 ? `step highlight-step` : 'step'}>3</div>
                <div className={props.step === 4 ? `step highlight-step` : 'step'}>4</div>
            </div>
        </nav>
    )
}