import React from "react";
import "./LeaderboardSearch.css";

const LeaderboardSearch = (props) => (
    <div className={props.className + " left"}>
        <form>
            <input onChange={props.onChange} type="search" className="col-sm-8 col-xs-8" name="username" placeholder="Search User"/>
            <button type="submit" onClick={props.userSearch} className="btn btn-primary col-sm-4 col-xs-4">Search User</button>
        </form>
    </div>
)


export default LeaderboardSearch