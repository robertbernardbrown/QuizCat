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
import LoginPage from './pages/LoginPage';
import LogoutFunction from './pages/LogoutFunction';
import SignUpPage from './pages/SignupPage';
import Auth from './utils/Auth';

class App extends Component {

  state = {
    authenticated: false
  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus = () => {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
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
                <Link to="/logout">Log out</Link><br/>
              </div>
            ) : 
            (
              <div>
                <Link to="/login">Log in</Link><br/>
                <Link to="/signup">Sign up</Link>
              </div>
            )}/>
          <Switch>
            <PropsRoute exact path="/" component={Main} />
            <PropsRoute exact path="/about" component={About} />
            <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
            <PropsRoute exact path="/contact" component={Contact} />
            <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
            <LoggedOutRoute path="/signup" component={SignUpPage}/>
            <Route path="/logout" component={LogoutFunction}/>
          </Switch>
        </div>
      </Router>
    )
  }
};

export default App;
