import React from "react";
import "./SideBar.css";
import { slide as Menu } from 'react-burger-menu';

class SideBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        {this.props.login}
      </Menu>
    );
  }
}

export default SideBar;