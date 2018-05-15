import React from "react";
import "./Wrapper.css";

const Wrapper = (props) => (
    <div className="container site-content">
        {props.children}
    </div>
)

export default Wrapper;