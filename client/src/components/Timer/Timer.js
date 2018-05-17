import React from "react";
import "./Timer.css";

const Timer = (props) => (
        <div className="container">
            <p className="text-center" id="timer-text">{props.time}</p>
        </div>
)

export default Timer;