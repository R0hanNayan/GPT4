import React from "react";
import './whatGPT4.css';
import { Feature } from "../../components";

function WhatGPT4(){
    return(
        <div className="gpt4_whatgpt4 section_margin" id="wgpt4">
            <div className="gpt4_whatgpt4-feature">
                <Feature/>
            </div>
            <div className="gpt4_whatgpt4-heading">
                <h1 className="gradient_text">The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt4_whatgpt4-container">
                <Feature/>
                <Feature/>
                <Feature/>
            </div>
        </div>
    );
}

export default WhatGPT4;