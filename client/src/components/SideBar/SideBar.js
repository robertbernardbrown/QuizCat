import React from "react";
import "./SideBar.css";
import { elastic as Menu } from 'react-burger-menu';

class SideBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu width={280}>
        {this.props.login}
      </Menu>
    );
  }
}

export default SideBar;