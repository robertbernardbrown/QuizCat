import React, {Component} from "react";
import "./Quiz.css";
import Question from "../Question";
import Answer from "../Answer";
import API from "../../utils/API";

class Quiz extends Component {

    state = {
        question: "",
        answers: "",
        quiz: [],
        quizLoaded: false
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
        return !this.state.quizLoaded ? <div className="container"> Loading question </div> : (
        <div className="container">
            <Question questions={this.state.quiz}/>
            <Answer answers={this.state.quiz}/>
        </div>
        )
    }
}

export default Quiz;