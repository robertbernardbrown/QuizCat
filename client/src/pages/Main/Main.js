import React, {Component} from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import Greeting from "../../components/Greeting";
import CountdownComp from "../../components/CountdownComp";
import SideBar from "../../components/SideBar";
import Quiz from "../../components/Quiz";
import FeedbackModal from "../../components/Modal";
import API from "../../utils/API";

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
        randomCat: ""
    }

    //on mount, set start time and countdown state
    componentDidMount = () => {
        this.setTime();
        this.setState({
            winner: false
        })
        API.getCategory()
        .then(res => {
            console.log(res)
            this.setState({
                randomCat: res.data[0].category
            })
        })
        .catch(err => console.log(err));
    }

    setTime = () => {
        let start1 = new Date();
        let start2 = new Date();
        start1.setHours(14, 45, 0)
        start2.setHours(14, 46, 0)
        this.setState({
            start: start1,
            nextStart: start2,
            countdown: this.tickDown()
        })
    }

    //adds zeroes to time display on page
    pad = (num) => {
        return ("0" + parseInt(num, 10)).substr(-2);
    }

    tickDown = () => {
        var now = new Date();
        if (now > this.state.start) { // too late, go to tomorrow
          let newStart = this.state.start.setDate(this.state.start.getDate() + 1)
          this.setState({
              start: this.state.nextStart,
              nextStart: newStart,
              stillIn: true
          })
        }
        var remain = ((this.state.start - now) / 1000);
        var hh = this.pad((remain / 60 / 60) % 60);
        var mm = this.pad((remain / 60) % 60);
        var ss = this.pad(remain % 60);
        this.setState({
            countdown: `${hh}:${mm}:${ss}`
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
        if (countdown === "00:00:00") {
            this.setState({
                show: false,
                quizTime: true,
                time: now,
                stopTimer: false,
                winner: false,
                randomCat: this.randomCat()
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
        this.handleShow();
    }
  
    //close modal
    handleClose  = () => {
        this.setState({ show: false });
    }
  
    //show modal
    handleShow = () => {
        this.setState({ show: true });
    }

    resetWin = () => {
        this.setState({ winner: false})
    }
  
    render() {
        return (
            <div>
                <SideBar/>
                <Header/>
                <Wrapper>
                    {/* render quiz if quiztime, else show countdown and about components */}
                    {this.state.quizTime && this.state.stillIn ? 
                        <Quiz handleLose={this.handleLose} handleWin={this.handleWin} timer={this.state.timeSince} category={this.state.randomCat}/> : 
                    <div>
                        <Greeting category={this.state.randomCat}/>
                        <CountdownComp countdown={this.state.countdown}/>
                        <FeedbackModal show={this.state.show} handleClose={this.handleClose} winner={this.state.winner} timer={this.state.timeSince}/>
                    </div>
                    }
                </Wrapper>
                <Footer/>
            </div>
        )
    }
}

export default Main;