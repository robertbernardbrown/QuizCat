import React from "react";
import "./SideBar.css";
import { slide as Menu } from 'react-burger-menu';
import PropTypes from "prop-types";

class SideBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu isOpen={this.props.isOpen} width={280}>
        {this.props.login}
      </Menu>
    );
  }
}

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
}

export default SideBar;