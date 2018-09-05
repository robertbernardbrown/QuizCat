import "./LeaderboardFilter.css";
import React from "react";
import {DropdownButton, MenuItem} from "react-bootstrap";
import PropTypes from "prop-types";

const LeaderboardFilter = (props) => (
    <div className={props.className + " right"}>
    <DropdownButton title="Filter Category" bsStyle="primary btn-block" id="category-filter" className="scrollable-menu">
        {props.categories.map((cur, i) => (
            <MenuItem key={i} eventKey={cur} bsClass="menu-item" onSelect={props.filterCategory}>{cur}</MenuItem>
        ))}
    </DropdownButton>
    </div>
)

LeaderboardFilter.propTypes = {
    className: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    filterCategory: PropTypes.func.isRequired
};

export default LeaderboardFilter;