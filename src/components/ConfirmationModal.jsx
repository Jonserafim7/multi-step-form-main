import React from "react";

export default function ConfirmationModal(props) {
    return (
        <div className="confirmation-modal">
            <img src="/src/assets/images/icon-thank-you.svg" alt="confirmation-icon"/>
            <h1>Thank you!</h1>
            <p>
                Thanks for confirming your subscription!
                We hope you have fun using our platform.
                If you ever need support, please feel free to 
                email us at support@loremgaming.com
            </p>
        </div>
    )
}