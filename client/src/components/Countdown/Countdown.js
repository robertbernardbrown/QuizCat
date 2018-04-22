import React from "react";
import moment from "moment";

let date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

const Countdown = () => (
    <div className="container">
        <p>{date}</p>
    </div>
)

export default Countdown;