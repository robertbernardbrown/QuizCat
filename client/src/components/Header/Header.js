import React from "react";
import "./Header.css";
import "react-bootstrap";


const Header = () => (
    <div className="jumbotron">
        <div className="container">
            <a href="/"><h1 className="display-4 text-center">QuizCat</h1></a>
        </div>
    </div>
)

export default Header;