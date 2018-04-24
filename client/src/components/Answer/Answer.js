import React, { Component } from "react";
import shuffleArray from "../../utils/shuffleArray";
import "./Answer.css";

class Answer extends Component {

    state = {
        answer: "",
        options: [],
        parsedOptions : []
    }

    componentDidMount() {
        let answer = this.props.answer;
        let options = this.props.options;
        options.push(answer);
        shuffleArray(options);
        this.setState({
            answer: answer,
            options: this.parseOptions(options)
        })
    }

    parseOptions = (arr) => {
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

    render(){
        return (
            <div className="answer">
                {!this.state.options.length ? <div>hi</div> : 
                this.state.options.map((cur,i) => (
                    <li key={i} className="list-group-item">
                        <p>{cur}</p>
                    </li>
                ))}
            </div>
        )
    }
}

export default Answer;