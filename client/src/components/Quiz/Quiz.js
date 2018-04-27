import React, {Component} from "react";
import "./Quiz.css";
import shuffleArray from "../../utils/shuffleArray";
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
                quiz: shuffleArray(res.data.results),
            })
            this.setState({
                answer: this.state.quiz[this.state.questionIndex].correct_answer
            })
        })
        .catch(err => console.log(err))
    }

    handleUserGuess = (e) => {
        // console.log(e.target);
        console.log(e.target.id)
        console.log(this.state.answer)
        if (e.target.id === this.state.answer) {
            console.log("you got it!")
            let questionIndex = this.state.questionIndex;
            this.setState({
                questionIndex: ++questionIndex
            })
        }
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
                        handleUserGuess={this.handleUserGuess}
                        />
                    </div>
                </div>
            )
        )
    }
}

export default Quiz;