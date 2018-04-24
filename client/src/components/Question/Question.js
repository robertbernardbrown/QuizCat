import React from "react";
import "./Question.css";

const Question = props => {
    let parser = new DOMParser();
    let question = props.questions
    let dom = parser.parseFromString(question, 'text/html');
    let decodedString = dom.body.textContent;
    return (
        <div className="question">
            <p>{decodedString}</p>
        </div>
    )
}

export default Question;