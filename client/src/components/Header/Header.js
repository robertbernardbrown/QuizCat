import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "react-bootstrap";

const Header = () => (
        <header className="jumbotron header-div">
            <Link to={'/'} className="header-text"><h1>QuizCat</h1></Link>
        </header>
)

export default Header;