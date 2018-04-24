import React from "react";
import "./Question.css";

var parser = new DOMParser();

const Question = props => (
    <div className="question">
        {props.questions.map((cur, i) => {
            let dom = parser.parseFromString(cur.question, 'text/html');
            let decodedString = dom.body.textContent;
            return (<p className={i} key={i}>{decodedString}</p>);
        })}
    </div>
)

export default Question;