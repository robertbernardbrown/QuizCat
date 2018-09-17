import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SignUpForm = ({onSubmit,onChange,errors,user}) => (
  <div className="container">
    <div className="inner-display-div">
      <h2 className="card-heading">Sign Up</h2>
      <form action="/" onSubmit={onSubmit}>

        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <div className="field-line">
          <input
              placeholder={errors.name ? errors.name.toString() : "Name"}
              name="name"
              className={errors.name ? "has-error" : ""}
              onChange={onChange}
              value={user.name}
          />
        </div>

        <div className="field-line">
          <input
              placeholder={errors.email ? errors.email.toString() : "Email"}
              name="email"
              className={errors.email ? "has-error" : ""}
              onChange={onChange}
              value={user.email}
          />
        </div>

        <div className="field-line">
          <input
              placeholder={errors.password ? errors.password.toString() : "Password"}
              type="password"
              name="password"
              onChange={onChange}
              className={errors.password ? "has-error" : ""}
              value={user.password}
          />
        </div>

        <div className="button-line">
          <button className="btn btn-primary btn-block" type="submit">Sign-Up</button>
        </div>

        <p>Already have an account? <br/><Link to={'/'} id="sign">Log in</Link></p>
      </form>
    </div>
  </div>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;