import React, {Component} from "react";
import shuffleArray from "../../utils/shuffleArray";
import Question from "../Question";
import Answer from "../Answer";
import API from "../../utils/API";
import Auth from "../../utils/Auth";
import Timer from "../Timer";

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
        API.fetchQuiz(Auth.getToken())
        .then(res=>{
            console.log(res)
            //fetch quiz from API
            this.setState({ 
                quiz: res.data,
            })
            //set initial quiz question
            this.setQuestion();
        })
        .catch(err => console.log(err))
    }

    //sets each new question/options/answer chronologically from quiz stored in state
    setQuestion = () => {
        if (this.state.questionIndex === 12){
            this.endOfGame()
        } else {
            this.setState({
                answer: this.parseString(this.state.quiz[this.state.questionIndex].correct_answer),
                question: this.state.quiz[this.state.questionIndex].question
            }, this.formatOptionArray());
        }
    }

    //pushes answer onto option array and shuffles array
    formatOptionArray =() => {
        let answer = this.state.quiz[this.state.questionIndex].correct_answer;
        let options = this.state.quiz[this.state.questionIndex].incorrect_answers;
        options.push(answer);
        shuffleArray(options);
        this.setState({
            options: this.parseArr(options)
        })
    }

    //parses arrays from unicode to readable strings from API
    parseArr = (arr) => {
        let array = [];
        let parser = new DOMParser();
        arr.forEach(cur => {
            let dom = parser.parseFromString(cur, 'text/html');
            let decodedString = dom.body.textContent;
            array.push(decodedString);
        })
        return array;
    }

    //parses strings from unicode to readable strings from API
    parseString = (str) => {
        let parser = new DOMParser();
        let dom = parser.parseFromString(str, 'text/html');
        let decodedString = dom.body.textContent;
        return decodedString;
    }

    handleUserGuess = (e) => {
        if (e.target.textContent === this.state.answer) {
            let questionIndex = this.state.questionIndex;
            questionIndex = questionIndex + 1;
            this.setState({
                questionIndex: questionIndex
            }, 
            this.setQuestion);
        } else {
            this.props.handleLose();
        }
    }

    endOfGame = () => {
        this.props.handleWin();
    }
  
    render() {
        return (
            !this.state.quiz.length ? <div className="container"> Loading question </div> : (
                <div className="container">
                    <div>
                        <Question questions={this.state.question}/>
                        <Answer options={this.state.options} answer={this.state.answer} handleUserGuess={this.handleUserGuess}/>
                        <Timer time={this.props.timer}/>
                    </div>
                </div>
            )
        )
    }
}

export default Quiz;