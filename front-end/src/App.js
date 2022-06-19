import React from "react";
import Header from "./components/Header.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Main from "./components/Main.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
