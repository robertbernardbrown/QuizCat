import "./LeaderboardFilter.css";
import React from "react";
import {DropdownButton, MenuItem} from "react-bootstrap";

const LeaderboardFilter = (props) => (
    <DropdownButton title="Filter Category" bsStyle="primary" id="category-filter" className="scrollable-menu">
            <MenuItem eventKey="1">Any</MenuItem>
            <MenuItem eventKey="2">General</MenuItem>
            <MenuItem eventKey="3">Books</MenuItem>
            <MenuItem eventKey="4">Film</MenuItem>
            <MenuItem eventKey="5">Music</MenuItem>
            <MenuItem eventKey="6">Theatre</MenuItem>
            <MenuItem eventKey="7">TV</MenuItem>
            <MenuItem eventKey="8">Video Games</MenuItem>
            <MenuItem eventKey="9">Board Games</MenuItem>
            <MenuItem eventKey="10">Nature</MenuItem>
            <MenuItem eventKey="11">Computers</MenuItem>
            <MenuItem eventKey="12">Math</MenuItem>
            <MenuItem eventKey="13">Mythology</MenuItem>
            <MenuItem eventKey="14">Geography</MenuItem>
            <MenuItem eventKey="15">History</MenuItem>
            <MenuItem eventKey="16">Politics</MenuItem>
            <MenuItem eventKey="17">Art</MenuItem>
            <MenuItem eventKey="18">Celebrities</MenuItem>
            <MenuItem eventKey="19">Animals</MenuItem>
            <MenuItem eventKey="20">Vehicles</MenuItem>
            <MenuItem eventKey="21">Comics</MenuItem>
            <MenuItem eventKey="22">Gadgets</MenuItem>
            <MenuItem eventKey="23">Anime</MenuItem>
            <MenuItem eventKey="24">Cartoons</MenuItem>
    </DropdownButton>
)

export default LeaderboardFilter;