import React, {Component} from "react";
import "./Quiz.css";
import Question from "../Question";
import Answer from "../Answer";
import API from "../../utils/API";

class Quiz extends Component {

    state = {
        question: "",
        options: [],
        answer: "",
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
                    <div>
                        <Question questions={this.state.quiz[this.state.questionIndex].question}/>
                        <Answer 
                        options={this.state.quiz[this.state.questionIndex].incorrect_answers}
                        answer={this.state.quiz[this.state.questionIndex].correct_answer}
                        />
                    </div>
                </div>
            )
        )
    }
}

export default Quiz;