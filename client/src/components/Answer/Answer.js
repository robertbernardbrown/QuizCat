import React from "react";
import "./Answer.css";

const Answer = (props) => {
    let parser = new DOMParser();
    let answers = props.answers
    let dom = parser.parseFromString(answers, 'text/html');
    let decodedString = dom.body.textContent;
    return (
        <div className="question">
            <p>{decodedString}</p>
        </div>
    )
}

export default Answer;