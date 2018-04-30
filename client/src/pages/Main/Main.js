import React, {Component} from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import Greeting from "../../components/Greeting";
import CountdownComp from "../../components/CountdownComp";
import SideBar from "../../components/SideBar";
import Quiz from "../../components/Quiz";
import FeedbackModal from "../../components/Modal";

class Main extends Component {

    state = {
        start: {},
        nextStart: {},
        countdown: "",
        quizTime: false,
        stillIn: true,
        show: false,
        winner: false
    }

    //on mount, set start time and countdown state
    componentDidMount = () => {
        this.setTime();
    }

    setTime = () => {
        let start1 = new Date();
        let start2 = new Date();
        start1.setHours(16, 5, 0)
        start2.setHours(16, 6, 0)
        this.setState({
            start: start1,
            nextStart: start2,
            countdown: this.tick()
        })
    }

    //adds zeroes to time display on page
    pad = (num) => {
        return ("0" + parseInt(num, 10)).substr(-2);
    }

    tick = () => {
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
        // recursive call to tick function
        setTimeout(this.tick, 1000);
    }

    quizTime = (countdown) => {
        if (countdown === "00:00:00") {
            this.setState({quizTime: true})
        }
    }

    handleLose = () => {
        this.setState({
            stillIn: false
        })
        this.handleShow();
    }

    handleWin = () => {
        this.setState({
            stillIn: false,
            winner: true
        })
        this.handleShow();
    }
  
    handleClose  = () => {
      this.setState({ show: false });
    }
  
    handleShow = () => {
      this.setState({ show: true });
    }
  
    render() {
        return (
            <div>
                <SideBar/>
                <Header/>
                <Wrapper>
                    {/* render quiz if quiztime, else show countdown and about components */}
                    {this.state.quizTime && this.state.stillIn ? <Quiz handleLose={this.handleLose} handleWin={this.handleWin}/> : 
                    <div>
                        <Greeting/>
                        <CountdownComp countdown={this.state.countdown}/>
                        <FeedbackModal show={this.state.show} handleClose={this.handleClose} winner={this.state.winner}/>
                    </div>
                    }
                </Wrapper>
                <Footer/>
            </div>
        )
    }
}

export default Main;