import React from "react";
import "./Answer.css";

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

export default Answer;