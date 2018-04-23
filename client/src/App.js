import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Main from "../src/pages/Main";
import About from "../src/pages/About";

const App = () => (
  <Router>
    <div className="app">
      <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
      </Switch>
    </div>
  </Router>
);

export default App;
