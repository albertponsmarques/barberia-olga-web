import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Quien from "./components/QuienSomos";
import Header from "./components/Header";
import Where from "./components/Where";
import Appointment from "./components/Appointment";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quienessomos" element={<Quien />} />
      <Route path="/dondeestamos" element={<Where />} />
      <Route path="/cita" element={<Appointment />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

reportWebVitals();
