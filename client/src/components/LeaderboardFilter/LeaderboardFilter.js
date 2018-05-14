import "./LeaderboardFilter.css";
import React from "react";
import {DropdownButton, MenuItem} from "react-bootstrap";

const LeaderboardFilter = (props) => (
    <div className={props.className + " right"}>
    <DropdownButton title="Filter Category" bsStyle="primary btn-block" id="category-filter" className="scrollable-menu">
        {props.categories.map((cur, i) => (
            <MenuItem key={i} eventKey={cur} bsClass="menu-item" onSelect={props.filterCategory}>{cur}</MenuItem>
        ))}
    </DropdownButton>
    </div>
)

export default LeaderboardFilter;