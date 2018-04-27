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
        parseOptions: [],
        questionIndex: 0,
        quiz: []
    }

    componentDidMount() {
        API.getQuiz()
        .then(res=>{
            console.log(res)
            //fetch quiz from API
            this.setState({ 
                quiz: shuffleArray(res.data.results),
            })
            //set initial quiz question
            this.setQuestion();
        })
        .catch(err => console.log(err))
    }

    //sets each new question/options/answer chronologically from quiz stored in state
    setQuestion = () => {
        this.setState({
            answer: this.parseString(this.state.quiz[this.state.questionIndex].correct_answer),
            question: this.state.quiz[this.state.questionIndex].question
        })
        this.formatOptionArray();
    }

    formatOptionArray =() => {
        let answer = this.state.quiz[this.state.questionIndex].correct_answer;
        // console.log(answer)
        let options = this.state.quiz[this.state.questionIndex].incorrect_answers;
        options.push(answer);
        shuffleArray(options);
        this.setState({
            options: this.parseArr(options)
        })
    }

    parseArr = (arr) => {
        return ( 
            arr.map((cur, i) => {
            let array = [];
            let parser = new DOMParser();
            let dom = parser.parseFromString(cur, 'text/html');
            let decodedString = dom.body.textContent;
            array.push(decodedString);
            return array;
            })
        )
    }

    parseString = (str) => {
        let parser = new DOMParser();
        let dom = parser.parseFromString(str, 'text/html');
        let decodedString = dom.body.textContent;
        return decodedString;
    }

    handleUserGuess = (e) => {
        // console.log(e.target);
        // console.log(e.target.id)
        // console.log(this.state.answer)
        if (e.target.id === this.state.answer) {
            // console.log("you got it!")
            let questionIndex = ++this.state.questionIndex;
            console.log(this.state.answer);
            (this.setState({
                questionIndex: questionIndex
            }), this.setQuestion())
        }
    }

    render() {
        return (
            !this.state.quiz.length ? <div className="container"> Loading question </div> : (
                <div className="container">
                    <div>
                        <Question questions={this.state.question}/>
                        <Answer options={this.state.options} answer={this.state.answer} handleUserGuess={this.handleUserGuess}/>
                    </div>
                </div>
            )
        )
    }
}

export default Quiz;