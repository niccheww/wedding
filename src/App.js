import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from "./components/dashboard/dashboard";
import MessageBoard from "./components/message-board/message-board";
import MessageInput from "./components/message-input/message-input";
import NoMatch from "./components/no-match/no-match";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/">Home</Link>
          <Link to="/wellwish">Message Input</Link>
          <Link to="/message-board">Message Board</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/message-board">
            <MessageBoard />
          </Route>
          <Route path="/wellwish">
            <MessageInput />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
