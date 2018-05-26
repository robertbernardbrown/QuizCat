import React, {Component} from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import Greeting from "../../components/Greeting";
import CountdownComp from "../../components/CountdownComp";
import Quiz from "../../components/Quiz";
import FeedbackModal from "../../components/Modal";
import API from "../../utils/API";
import Auth from "../../utils/Auth";
import ErrorBoundary from "../../components/ErrorBoundary";
import UserCount from "../../components/UserCount";
import "./Main.css"

class Main extends Component {

    state = {
        start: {},
        nextStart: {},
        countdown: "",
        quizTime: false,
        stillIn: true,
        show: false,
        winner: false,
        time: {},
        timeSince: {},
        stopTimer: false,
        randomCat: "",
        secretData: '',
        user: "",
        user_id: ""
    }

    componentWillMount() {
        this.getUserInfo();
        this.setTime();
        this.setState({
            winner: false
        })
        this.checkCategory();
    } 

    getUserInfo = () => {
        API.quiz(Auth.getToken())
        .then(res => {
            this.setState({
                user: res.data.user,
                user_id: res.data.user_id
            });
        })
    }

    checkCategory = () => {
    API.getCategory(Auth.getToken())
    .then(res => {
        this.setState({
            randomCat: res.data[0].category
        })
    })
    .catch(err => console.log(err));
    }

    setTime = () => {
        let now = new Date();
        let start = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let remainder = 5 - (minutes % 5)
        start.setHours(hours, (minutes+remainder), 0, 0);
        this.setState({
            start: start,
            countdown: this.tickDown()
        })
    }

    //adds zeroes to time display on page
    pad = (num) => {
        return ("0" + parseInt(num, 10)).substr(-2);
    }

    tickDown = () => {
        var now = new Date();
        if (now > this.state.start) { // too late, go to next 5 minutes
            let start = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let remainder = 5 - (minutes % 5)
            start.setHours(hours, (minutes+remainder), 0, 0);
            this.setState({
                start: start,
                stillIn: true
            })
        }
        var remain = ((this.state.start - now) / 1000);
        // var hh = this.pad((remain / 60 / 60) % 60);
        var mm = this.pad((remain / 60) % 60);
        var ss = this.pad(remain % 60);
        this.setState({
            countdown: `${mm}:${ss}`
        });
        //run quizTime function to check for "00:00:00" to run quiz
        this.quizTime(this.state.countdown);
        // recursive call to tickDown function
        setTimeout(this.tickDown, 1000);
    }

    runTimer = () => {
        var now = new Date();
        var remain = ((now - this.state.time) / 1000);
        var mm = this.pad((remain / 60) % 60);
        var ss = this.pad(remain % 60);
        var ms = this.pad(remain * 1000)
        this.setState({
            timeSince: `${mm}:${ss}:${ms}`
        });
        // recursive call to runTimer function
        if (!this.state.stopTimer) {
            setTimeout(this.runTimer, 100);
        }
    }

    quizTime = (countdown) => {
        var now = new Date();
        if (countdown === "00:00") {
            this.setState({
                show: false,
                quizTime: true,
                time: now,
                stopTimer: false,
                winner: false,
            })
            this.runTimer();
        }
    }

    handleLose = () => {
        this.setState({
            stillIn: false,
            stopTimer: true
        })
        this.handleShow();
    }

    handleWin = () => {
        this.setState({
            stillIn: false,
            winner: true,
            stopTimer: true
        })
        this.saveScore();
        this.handleShow();
    }

    saveScore = () => {
        let userScore = {
            userName: this.state.user, 
            userId: this.state.user_id, 
            timeFinished: this.state.timeSince, 
            category: this.state.randomCat
        }
        API.saveScore(userScore, Auth.getToken())
    }
  
    //close modal
    handleClose  = () => {
        this.setState({ show: false });
        this.checkCategory();
    }
  
    //show modal
    handleShow = () => {
        this.setState({ show: true });
    }

    render() {
        return (
            <div className="site">
                <ErrorBoundary>
                    <Header/> 
                    <Wrapper>
                    {this.state.quizTime && this.state.stillIn ? 
                            <Quiz user={this.state.user} handleLose={this.handleLose} handleWin={this.handleWin} timer={this.state.timeSince} category={this.state.randomCat}/> 
                        : 
                        <div>
                            <Greeting category={this.state.randomCat} name={this.state.user}/>
                            <CountdownComp countdown={this.state.countdown}/>
                            <FeedbackModal show={this.state.show} handleClose={this.handleClose} winner={this.state.winner} timer={this.state.timeSince}/>
                            <UserCount socket={this.props.socket}/>
                        </div>
                    }
                    </Wrapper>
                    <Footer/>
                </ErrorBoundary>
            </div>
        )
    }
}

export default Main;