import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ManagerDashboard from "./Managerdashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manager" element={<ManagerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
