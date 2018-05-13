import React from "react";
import "./LeaderboardSearch.css";

const LeaderboardSearch = (props) => (
    <div className={props.className + " left"}>
        {/* <div className="row"> */}
        <form>
            <input type="text" className="col-sm-8 col-xs-8" name="username" value="Search User"/>
            <button type="submit" className="btn btn-primary col-sm-4 col-xs-4">Search User</button>
        </form>
        {/* </div> */}
    </div>
)


export default LeaderboardSearch