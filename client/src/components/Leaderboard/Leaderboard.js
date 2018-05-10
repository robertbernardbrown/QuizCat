import React from "react";
import "./Leaderboard.css";

const Leaderboard = (props) => (
    <div className="container">
        {props ? <div>{props.scores.map(cur=><p key={cur._id}>{cur.name}</p>)}</div> : <div>No scores to display</div>}
    </div>
)

export default Leaderboard;