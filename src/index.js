import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Quien from "./components/QuienSomos";
import Navigation from "./components/NavbarWind";
import Header from "./components/Header";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quienessomos" element={<Quien />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

reportWebVitals();
