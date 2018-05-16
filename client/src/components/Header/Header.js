import React from "react";
import "./Header.css";
import "react-bootstrap";


const Header = () => (
    <div className="jumbotron header-div">
        <div className="container">
            <a href="/"><h1 className="header-text text-center">QuizCat</h1></a>
        </div>
    </div>
)

export default Header;