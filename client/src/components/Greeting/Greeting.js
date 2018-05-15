import React from "react";

const Greeting = (props) => (
    <div className="greeting">
        <h1>Welcome to QuizCat, {props.name}!</h1>
        <p>Play the quiz at the start of every hour!</p>
        <br/>
        <p>Quizzes span all kinds of categories and each quiz is different.</p>
        <br/>
        <p>This hour's (cat)egory is {props.category}</p>
    </div>
)

export default Greeting;