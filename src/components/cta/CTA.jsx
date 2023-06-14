import React from "react";
import './cta.css';

function CTA(){
    return(
        <div className="gpt4_cta">
            <div className="gpt4_cta-content">
                <p>Request Early Access to Get Started</p>
                <h3>Register today & start exploring the endless possiblities.</h3>
            </div>
            <div className="gpt4_cta-button">
                <button type="button">Get Started</button>
            </div>
        </div>
    );
}

export default CTA;