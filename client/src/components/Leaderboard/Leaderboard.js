import React from "react";
import "./Leaderboard.css";

const Leaderboard = (props) => (
    console.log(props.scores),
    <div className="container">
        {props.scores.length ? 
        <div>
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-4 text-center">Name</div>
                <div className="col-md-4 col-sm-4 col-xs-4 text-center">Category</div>
                <div className="col-md-4 col-sm-4 col-xs-4 text-center">Times</div>
            </div>
            {props.scores.map(cur => 
            <div key={cur._id} className="list-group-item row">
                <div className="item-data col-md-4 col-sm-4 col-xs-4 text-center">{cur.userName[0].name}</div>
                <div className="item-data col-md-4 col-sm-4 col-xs-4 text-center">{cur.category}</div>
                <div className="item-data col-md-4 col-sm-4 col-xs-4 text-center">{cur.timeFinished}</div>
            </div>)}
        </div> : 
        <div>No scores to display</div>}
    </div> 
)

export default Leaderboard;