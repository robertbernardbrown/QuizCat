import React from "react";
import "./Header.css";
import "react-bootstrap";


const Header = () => (
    <div className="jumbotron">
        <div className="container">
            <h1 className="display-4">QuizCat</h1>
            <hr className="my-4"/>
            <p>Play the game, beat your friends</p>
        </div>
    </div>
)

export default Header;