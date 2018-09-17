import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../../utils/Auth';


class LogoutFunction extends React.Component {

  componentDidMount() {
    // deauthenticate user
    Auth.deauthenticateUser();
    this.props.toggleAuthenticateStatus();
    // change the current URL to / after logout
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <p>Logging out...</p>
      </div>
    )
  }
}

LogoutFunction.contextTypes = {
  router: PropTypes.object.isRequired,
  toggleAuthenticateStatus: PropTypes.func
};

export default LogoutFunction;