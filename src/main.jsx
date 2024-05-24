import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Impact from "./ImpactChart.jsx";
import Causes from "./CausesChart.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/causes" element={<Causes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
