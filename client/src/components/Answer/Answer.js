import React from "react";
import "./Answer.css";
import PropTypes from "prop-types";

const Answer = (props) => (
    <div className="answer">
        <div id="inner-answer-div">
            {!props.options.length ? <div>Loading options</div> : 
            props.options.map((cur,i) => (
                <li key={i} className="list-group-item" onClick={props.handleUserGuess}>
                    <p id={cur} >{cur}</p>
                </li>
            ))}
        </div>
    </div>
)

Answer.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    answer: PropTypes.string.isRequired,
    handleUserGuess: PropTypes.func.isRequired,
};

export default Answer;