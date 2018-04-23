import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Main from "../src/pages/Main";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";

const App = () => (
  <Router>
    <div className="app">
      <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
      {/* <Route path="/leaderboard" component={Leaderboard} /> */}
      <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>
);

export default App;
