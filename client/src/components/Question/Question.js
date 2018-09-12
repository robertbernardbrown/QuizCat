import React from "react";
import "./Question.css";
import PropTypes from 'prop-types';

const Question = props => {
    let parser = new DOMParser();
    let question = props.questions
    let dom = parser.parseFromString(question, 'text/html');
    let decodedString = dom.body.textContent;
    return (
        <div className="question">
            <div id="inner-question-div">
                <p className="question-text">{decodedString}</p>
            </div>
        </div>
    )
}

Question.propTypes = {
    questions: PropTypes.string.isRequired
};

export default Question;