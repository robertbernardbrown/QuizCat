import React from "react";
import "./Answer.css";

const Answer = (props) => {
    let parser = new DOMParser();
    let options = props.options;
    let answer = props.answer;
    options.push(answer);
    let dom = parser.parseFromString(options, 'text/html');
    let decodedString = dom.body.textContent;
    return (
        <div className="question">
            <p>{decodedString}</p>
        </div>
    )
}

export default Answer;