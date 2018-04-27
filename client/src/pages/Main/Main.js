import React, {Component} from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import Greeting from "../../components/Greeting";
import CountdownComp from "../../components/CountdownComp";
import SideBar from "../../components/SideBar";
import Quiz from "../../components/Quiz";

class Main extends Component {

    state = {
        start: {},
        countdown: "",
        quizTime: false
    }

    //on mount, set start time and countdown state
    componentDidMount = () => {
        let date = new Date()
        date.setHours(16, 48, 25)
        this.setState({
            start: date,
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
              start: newStart
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

    quizTime = () => {
        if (this.state.countdown === "00:00:00") {
            this.setState({quizTime: true})
        }
    }

    render() {
        return (
            <div>
                <SideBar/>
                <Header/>
                <Wrapper>
                    {/* render quiz if quiztime, else show countdown and about components */}
                    {this.state.quizTime === true ? <Quiz/> : 
                    <div>
                        <Greeting/>
                        <CountdownComp countdown={this.state.countdown}/>
                    </div>
                    }
                </Wrapper>
                <Footer/>
            </div>
        )
    }
}

export default Main;