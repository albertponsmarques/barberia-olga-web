import React, { Fragment } from "react";
import Nav from "./components/Navbar";
import { Switch, Route, Redirect, useEffect } from "react-router";
import Home from "./components/Home";
import "./App.css";

import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
