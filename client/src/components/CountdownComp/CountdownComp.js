import React from "react";
import "./CountdownComp.css";

const CountdownComp = (props) => (
        <div className="container">
            <div className="text-center" id="countdown">
                {props.countdown}
            </div>
        </div>
)

export default CountdownComp;