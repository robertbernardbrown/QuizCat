/*global FB*/
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Main from "../src/pages/Main";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Leaderboard from "../src/pages/Leaderboard";
import SideBar from "./components/SideBar";
import { PrivateRoute, PropsRoute, LoggedOutRoute } from './components/Routes';
// import LoginPage from './pages/LoginPage.jsx';
import LogoutFunction from './pages/LogoutFunction';
// import SignUpPage from './pages/SignUpPage.jsx';
import Auth from './utils/Auth';
import API from "./utils/API";

class App extends Component {

  state = {
    authenticated: false
  }

  toggleAuthenticateStatus = () => {
    // check authenticated status and toggle state based on that
    console.log("hi")
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  componentDidMount() {
    const self = this;
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '240493756527031',
        cookie     : true,  // enable cookies to allow the server to access
        // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.1' // use version 2.1
      });

      // login callback implementation goes inside the function() { ... } block
      FB.Event.subscribe('auth.statusChange', function(response) {
        if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          FB.api('/me', function(response) {
            console.log(response);
            console.log('Good to see you, ' + response.name + '.');
            API.createFbUser();
            // check if user is logged in on refresh
            self.toggleAuthenticateStatus()
          });
          localStorage.setItem('token', response.authResponse.accessToken)
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      });
    }.bind(this);

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}

  render() {
    return(
      <Router>
        <div>
          <SideBar login={this.state.authenticated ? 
            (
              <div>
                <Link to="/home">Home</Link><br/>
                <Link to="/about">About</Link><br/>
                <Link to="/leaderboard">Leaderboard</Link><br/>
                <Link to="/logout" >Log out</Link><br/>
              </div>
            ) : 
            (
              <div>
                <Link to="/login">Log in</Link><br/>
                <Link to="/signup">Sign up</Link>
              </div>
            )}/>
          <Switch>
            <PropsRoute exact path="/" component={Main} toggleAuthenticateStatus={this.toggleAuthenticateStatus} authenticated={this.state.authenticated}/>
            <PropsRoute exact path="/about" component={About} />
            <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
            <PropsRoute exact path="/contact" component={Contact} />
            {/* <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} /> */}
            {/* <LoggedOutRoute path="/signup" component={SignUpPage}/> */}
            <Route path="/logout" component={LogoutFunction} toggleAuthenticateStatus={this.toggleAuthenticateStatus}/>
          </Switch>
        </div>
      </Router>
    )
  }
};

export default App;
