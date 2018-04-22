import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Main from "../src/pages/Main"

const App = () => (
  <Router>
    <div className="app">
      <Route path="/" component={Main} />
    </div>
  </Router>
);

export default App;
