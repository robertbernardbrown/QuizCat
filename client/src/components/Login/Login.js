import "./Login.css";
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Bootstrap from 'react-bootstrap';
// import { Card, CardText } from 'material-ui/Card';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';

const LoginForm = ({onSubmit,onChange,errors,successMessage,user,toggleAuthenticateStatus}) => (
  <div className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="login-heading">Login</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <input
          placeholder="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <button className="btn btn-primary" type="submit">Log-In</button>
      </div>

      <p>Don't have an account? <Link to={'/signup'}>Create one</Link>.</p>
    </form>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;