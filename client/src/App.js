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
import ErrorBoundary from "../src/components/ErrorBoundary";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import home from '@fortawesome/fontawesome-free-solid/faHome';
import question from '@fortawesome/fontawesome-free-solid/faQuestionCircle';
import trophy from '@fortawesome/fontawesome-free-solid/faTrophy';
import airplane from '@fortawesome/fontawesome-free-solid/faPaperPlane';
import signout from '@fortawesome/fontawesome-free-solid/faSignOutAlt';
import login from '@fortawesome/fontawesome-free-solid/faSignInAlt';
import signup from '@fortawesome/fontawesome-free-solid/faUserPlus';
import catheart from '../src/assets/heart-eyes-cat.png';
import catsmile from '../src/assets/happy-cat.png';
import io from "socket.io-client";
const socket = io();

class App extends Component {

  state = {
    authenticated: false,
    menuOpen: false
  }

  closeMenu () {
    this.setState({menuOpen: false})
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
        <ErrorBoundary>
          <div id="app-container">
            <SideBar isOpen={this.state.menuOpen} login={this.state.authenticated ? 
              (
                <div id="sidebar-links">
                  <div className="sidebar-img">
                    <img id="cat-face" src={catheart} alt="heart cat"/>
                  </div>
                  <div className="sidebar-link"><FontAwesomeIcon icon={home}/>     <Link onClick={() => this.closeMenu()} to="/">Home</Link></div>
                  <div className="sidebar-link"><FontAwesomeIcon icon={question}/> <Link onClick={() => this.closeMenu()} to="/about">About</Link></div>
                  <div className="sidebar-link"><FontAwesomeIcon icon={trophy}/>   <Link onClick={() => this.closeMenu()} to="/leaderboard">Leaderboard</Link></div>
                  <div className="sidebar-link"><FontAwesomeIcon icon={airplane}/> <Link onClick={() => this.closeMenu()} to="/contact">Contact</Link></div>
                  <div className="sidebar-link"><FontAwesomeIcon icon={signout}/>  <Link onClick={() => this.closeMenu()} to="/logout">Log out</Link></div>
                </div>
              ) : 
              (
                <div id="sidebar-links">
                  <div className="sidebar-img">
                    <img id="cat-face" src={catsmile} alt="smile cat"/>
                  </div>
                  <div className="sidebar-link"><FontAwesomeIcon icon={login}/>    <Link onClick={() => this.closeMenu()} to="/">Log in</Link></div>
                  <div className="sidebar-link"><FontAwesomeIcon icon={signup}/>   <Link onClick={() => this.closeMenu()} to="/signup">Sign up</Link></div>
                  <div className="sidebar-link"><FontAwesomeIcon icon={question}/> <Link onClick={() => this.closeMenu()} to="/about">About</Link></div>
                  <div className="sidebar-link"><FontAwesomeIcon icon={airplane}/> <Link onClick={() => this.closeMenu()} to="/contact">Contact</Link></div>
                </div>
              )}/>
            <Switch>
              <PropsRoute exact path="/" component={this.state.authenticated ? Main : LoginPage} 
                                        authenticated={this.state.authenticated}
                                        toggleAuthenticateStatus={this.toggleAuthenticateStatus} 
                                        socket={socket}
                                        />
              <PropsRoute exact path="/about" component={About} />
              <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
              <PropsRoute exact path="/contact" component={Contact} />
              <LoggedOutRoute path="/signup" component={SignupPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus}/>
              <PropsRoute path="/logout" component={LogoutFunction} toggleAuthenticateStatus={this.toggleAuthenticateStatus}/>
            </Switch>
          </div>
        </ErrorBoundary>
      </Router>
    )
  }
};

export default App;
