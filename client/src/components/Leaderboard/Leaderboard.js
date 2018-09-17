import React from "react";
import "./Leaderboard.css";
import PropTypes from "prop-types";

const Leaderboard = (props) => (
    <div className="container">
        {props.scores.length ? 
        <div className="leaderboard-results">
            <div className="list-group-item row list-item-header">
                <div className="col-md-4 col-sm-4 col-xs-4 text-center">Name</div>
                <div className="col-md-4 col-sm-4 col-xs-4 text-center">Category</div>
                <div className="col-md-4 col-sm-4 col-xs-4 text-center">Times</div>
            </div>
            {props.scores.map(cur => 
            <div key={cur._id} className="list-group-item row">
                <div className="item-data col-md-4 col-sm-4 col-xs-4 text-center">{cur.userName}</div>
                <div className="item-data col-md-4 col-sm-4 col-xs-4 text-center">{cur.category}</div>
                <div className="item-data col-md-4 col-sm-4 col-xs-4 text-center">{cur.timeFinished}</div>
            </div>)}
        </div> : 
        <div>No scores to display</div>}
    </div> 
)

Leaderboard.propTypes = {
    scores: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Leaderboard;