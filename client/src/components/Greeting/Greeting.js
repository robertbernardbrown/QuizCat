import React from "react";

const Greeting = (props) => (
    <div className="greeting">
        <h1>Welcome to QuizCat</h1>
        <p>Play our quizzes every day at 2pm and 8pm.</p>
        <br/>
        <p>Quizzes span all kinds of categories and each quiz is different.</p>
        <br/>
        <p>Today's (cat)egory is {props.category}</p>
    </div>
)

export default Greeting;