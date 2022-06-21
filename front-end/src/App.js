import React, { useReducer } from "react";
import Header from "./components/Header.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Main from "./components/Main.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppReducer from './reducer/AppReducer';
import AppContext from "./components/AppContext";


function App() {
  const intialState = {
    user: null,
    posts: []
  }
  const [state, dispatch] = useReducer(AppReducer, intialState);

  return (
    <Router>
      <AppContext.Provider value={{ state, dispatch }}>
        <div className="container">
          <Header />
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route path="/" element={<Main />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
