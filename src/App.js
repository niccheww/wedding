import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/dashboard";
import MessageBoard from "./components/message-board/message-board";
import MessageInput from "./components/message-input/message-input";
import NoMatch from "./components/no-match/no-match";
import Menu from "./components/menu/menu";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
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
