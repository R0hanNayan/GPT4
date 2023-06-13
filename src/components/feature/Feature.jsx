import React from "react";
import './feature.css';

function Feature(props){
    return(
        <div className="gpt4_features-container_feature">
            <div className="gpt4_features-container_feature-title">
                <div />
                <h1>{props.title}</h1>
            </div>
            <div className="gpt4_features-container_feature-text">
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Feature;