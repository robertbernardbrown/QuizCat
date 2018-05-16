import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch} from "react-router-dom";
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
import SignupPage from './pages/SignupPage';
import Auth from './utils/Auth';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import home from '@fortawesome/fontawesome-free-solid/faHome';
import question from '@fortawesome/fontawesome-free-solid/faQuestionCircle';
import trophy from '@fortawesome/fontawesome-free-solid/faTrophy';
import airplane from '@fortawesome/fontawesome-free-solid/faPaperPlane';
import signout from '@fortawesome/fontawesome-free-solid/faSignOutAlt';
import login from '@fortawesome/fontawesome-free-solid/faSignInAlt';
import signup from '@fortawesome/fontawesome-free-solid/faUserPlus';



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
        <div id="app-container">
          <SideBar login={this.state.authenticated ? 
            (
              <div>
                <FontAwesomeIcon icon={home}/> <Link to="/">Home</Link><br/>
                <FontAwesomeIcon icon={question}/> <Link to="/about">About</Link><br/>
                <FontAwesomeIcon icon={trophy}/> <Link to="/leaderboard">Leaderboard</Link><br/>
                <FontAwesomeIcon icon={airplane}/> <Link to="/contact">Contact</Link><br/>
                <FontAwesomeIcon icon={signout}/> <Link to="/logout">Log out</Link>
              </div>
            ) : 
            (
              <div>
                <FontAwesomeIcon icon={login}/> <Link to="/">Log in</Link><br/>
                <FontAwesomeIcon icon={signup}/> <Link to="/signup">Sign up</Link><br/>
                <FontAwesomeIcon icon={question}/> <Link to="/about">About</Link><br/>
                <FontAwesomeIcon icon={airplane}/> <Link to="/contact">Contact</Link>
              </div>
            )}/>
          <Switch>
            <PropsRoute exact path="/" component={this.state.authenticated ? Main : LoginPage} authenticated={this.state.authenticated} toggleAuthenticateStatus={this.toggleAuthenticateStatus}/>
            <PropsRoute exact path="/about" component={About} />
            <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
            <PropsRoute exact path="/contact" component={Contact} />
            <LoggedOutRoute path="/signup" component={SignupPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus}/>
            <PropsRoute path="/logout" component={LogoutFunction} toggleAuthenticateStatus={this.toggleAuthenticateStatus}/>
          </Switch>
        </div>
      </Router>
    )
  }
};

export default App;
