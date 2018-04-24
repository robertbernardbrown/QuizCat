import React from "react";
import "./Question.css";

const Question = props => (
    <div className="question">
        {props.questions.map((cur, i) => (
            <p className={i} key={i}>{cur.question}</p>
        ))}
    </div>
)

export default Question;