import React, {Component} from "react";

const CountdownComp = (props) => (
        <div className="container">
            <p className="text-center">{props.countdown}</p>
        </div>
)

export default CountdownComp;

// componentDidMount = () => {
//     let date = new Date()
//     date.setHours(19, 4, 0)
//     this.setState({
//         start: date,
//         countdown: this.tick()
//     })
// }

// pad = (num) => {
//     return ("0" + parseInt(num, 10)).substr(-2);
// }

// tick = () => {
//     var now = new Date();
//     if (now > this.state.start) { // too late, go to tomorrow
//       let newStart = this.state.start.setDate(this.state.start.getDate() + 1)
//       this.setState({
//           start: newStart
//       })
//     }
//     var remain = ((this.state.start - now) / 1000);
//     var hh = this.pad((remain / 60 / 60) % 60);
//     var mm = this.pad((remain / 60) % 60);
//     var ss = this.pad(remain % 60);
//     this.setState({
//         countdown: `${hh}:${mm}:${ss}`
//     });
//     // console.log(this.state.countdown === "00:00:00" ? console.log("hi") : console.log("yo"))
//     setTimeout(this.tick, 1000);
// }