import React, {Component} from "react";
import "./Quiz.css";
import Question from "../Question";
import Answer from "../Answer";
import API from "../../utils/API";

class Quiz extends Component {

    state = {
        question: "",
        answers: "",
        questionIndex: 0,
        quiz: []
    }

    componentDidMount() {
        API.getQuiz()
        .then(res=>{
            console.log(res)
            this.setState({ 
                quiz: res.data.results,
                quizLoaded: true
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            !this.state.quiz.length ? <div className="container"> Loading question </div> : (
                <div className="container">
                    {this.state.quiz.map((cur, i, arr) => {
                        return (
                        <div key={i}>
                            <Question questions={arr[this.state.questionIndex].question}/>
                            <Answer answers={arr[this.state.questionIndex].incorrect_answers}/>
                        </div>
                        )
                    })}
                </div>
            )
        )
    }
}

export default Quiz;