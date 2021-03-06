import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../../components/Signup';
import API from '../../utils/API';
import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper';
import Footer from '../../components/Footer';

class SignupPage extends React.Component {
  // set the initial component state
  state = {
    errors: {},
    user: {
      email: '',
      name: '',
      password: ''
    }
  }

  /**
   * Process the form.
   * @param {object} event - the JavaScript event object
   */
  processForm = event => {
    event.preventDefault();
    
    // create a string for an HTTP body message
    const { name, email, password } = this.state.user;

    API.signUp({name, email, password}).then(res => {
        localStorage.setItem('successMessage', res.data.message);

        // redirect user after sign up to login page
        this.props.history.push('/');
        this.setState({
          errors: {}
        });

    }).catch(( {response} ) => {
        const errors = response.data.errors ? response.data.errors : {};
        errors.summary = response.data.message;

        this.setState({
          errors
        });
      });
  }

  /**
   * Change the user object.
   * @param {object} event - the JavaScript event object
   */
  changeUser = event => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  render() {
    return (
      <div className="site">
        <Header/>
        <Wrapper>
        <SignUpForm
          onSubmit={this.processForm}
          onChange={this.changeUser}
          errors={this.state.errors}
          user={this.state.user}
        />
        </Wrapper>
        <Footer/>
      </div>
    );
  }

}

SignupPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignupPage;
