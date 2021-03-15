import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/dashboard";
import MessageBoard from "./components/message-board/message-board";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/message-board">
            <MessageBoard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
