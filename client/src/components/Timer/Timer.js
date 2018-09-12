import React from "react";
import "./Timer.css";
import PropTypes from "prop-types";

const Timer = (props) => (
        <div className="container">
            <p className="text-center" id="timer-text">{props.time}</p>
        </div>
)

Timer.propTypes = {
    time: PropTypes.string.isRequired
}

export default Timer;