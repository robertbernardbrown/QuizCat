import React from "react";
import "./Greeting.css";
import PropTypes from "prop-types";

const Greeting = (props) => (
    <div id="greeting">
        <div id="inner-greeting-div">
            <h2>Think&nbsp;you&nbsp;can&nbsp;hang, {props.name}?</h2>
            <h2>This&nbsp;quiz's&nbsp;(cat)egory&nbsp;is:</h2>
            <h2><span id="category-name">{props.category}</span></h2>
        </div>
    </div>
)

Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};

export default Greeting;