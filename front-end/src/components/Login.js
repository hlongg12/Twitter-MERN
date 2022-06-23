import React, { useContext, useState } from 'react';
import '../css/Auth.css';
import axios from 'axios';
import AppContext from "./AppContext";
import { useNavigate } from "react-router";

export default function Login() {
  const { dispatch } = useContext(AppContext);
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const option = {
        method: "post",
        url: "/api/v1/auth/login",
        data: userInput,
      };
      const response = await axios(option);
      const { token, userName } = response.data.data;
      localStorage.setItem("token", token);
      dispatch({ type: "CURRENT_USER", payload: { userName } });
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  }

  return (
    <section className="auth-container">
      <form className="auth-form" onSubmit={onSubmitHandler}>
        <h2>Enter Your Account</h2>
        {errorMessage && (
          <div className='error-message'>Error: {errorMessage}</div>
        )}
        <input type="email" name="email" id="" required placeholder="Email" value={userInput.email} onChange={onChangeHandler} />
        <input type="password" name="password" id="" required placeholder="Password" value={userInput.password} onChange={onChangeHandler} />
        <button className="btn" type="submit">Login</button>
      </form>
    </section>
  )
}
