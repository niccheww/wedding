import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import Checkin from "./components/checkin/checkin";
import Dashboard from "./components/dashboard/dashboard";
import Detail from "./components/detail/detail";
import MessageBoard from "./components/message-board/message-board";

function App() {
  /*
   * Three routes
   * 1. main route
   * 2. detail route
   * 3. checkin route
   */
  const [route, setRoute] = useState("message");
  return (
    <div className="App">
      {route === "main" && (
        <Dashboard onUpdateRoute={(route) => setRoute(route)} />
      )}
      {route === "detail" && <Detail />}
      {route === "checkin" && <Checkin />}
      {route === "message" && <MessageBoard />}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
