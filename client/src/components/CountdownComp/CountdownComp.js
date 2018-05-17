import React from "react";
import "./CountdownComp.css";

const CountdownComp = (props) => (
        <div className="container countdown-container">
            <div className="text-center" id="countdown">
                {props.countdown}
            </div>
            <p id="red-text">Remember, miss one question and you're outta here!</p>
        </div>
)

export default CountdownComp;