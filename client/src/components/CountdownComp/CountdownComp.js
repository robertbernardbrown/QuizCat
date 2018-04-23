import React, {Component} from "react";

class CountdownComp extends Component {

    state = {
        start: {},
        countdown: ""
    }

    componentDidMount = () => {
        let date = new Date()
        date.setHours(14, 0, 0)
        this.setState({
            start: date,
            countdown: this.tick()
        })
    }

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
        setTimeout(this.tick, 1000);

    }

    render() {
    return (
        <div className="container">
            <p className="text-center">{this.state.countdown}</p>
        </div>
        )
    }
}

export default CountdownComp;