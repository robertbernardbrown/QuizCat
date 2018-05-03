import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Main from "../src/pages/Main";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Leaderboard from "../src/pages/Leaderboard";

const App = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>
);

export default App;
