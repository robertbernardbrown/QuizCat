import React from "react";
import "./SideBar.css";
import { slide as Menu, ReactBurgerMenu } from 'react-burger-menu';

class SideBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="leaderboard" className="menu-item" href="/leaderboard">Leaderboard</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
    );
  }
}

export default SideBar;