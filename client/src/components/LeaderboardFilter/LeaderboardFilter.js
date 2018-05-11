import "./LeaderboardFilter.css";
import React from "react";
import {DropdownButton, MenuItem} from "react-bootstrap";

const LeaderboardFilter = (props) => (
    <DropdownButton title="Filter Category" bsStyle="primary" id="category-filter" className="scrollable-menu">
        {/* {props.categories.map((cur, i) => {
            <MenuItem eventKey={i}>{cur}</MenuItem>
        })} */}
        {/* This is gross. Need to find a way to iterate through dropdown options */}
        <MenuItem onSelect={props.filterCategory} eventKey="Any">Any</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="General">General</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Books">Books</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Film">Film</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Music">Music</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Theatre">Theatre</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="TV">TV</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Video Games">Video Games</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Board Games">Board Games</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Nature">Nature</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Computers">Computers</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Math">Math</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Mythology">Mythology</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Geography">Geography</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="History">History</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Politics">Politics</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Art">Art</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Celebrities">Celebrities</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Animals">Animals</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Vehicles">Vehicles</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Comics">Comics</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Gadgets">Gadgets</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Anime">Anime</MenuItem>
        <MenuItem onSelect={props.filterCategory} eventKey="Cartoons">Cartoons</MenuItem>
    </DropdownButton>
)

export default LeaderboardFilter;