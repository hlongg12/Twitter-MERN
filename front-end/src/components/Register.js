import React, { useState, useContext } from 'react';
import '../css/Auth.css';
import AppContext from './AppContext';
import { useNavigate } from "react-router";
import axios from 'axios';

export default function Register() {
  const {dispatch} = useContext(AppContext);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });
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
        url: "/api/v1/auth/register",
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
        <h2>Register New Account</h2>
        {errorMessage && 
          (Array.isArray(errorMessage) ? (
            errorMessage.map((err) => (
              <div className='error-message'>Error: {err}</div>
            ))
          ) : (
            <div className='error-message'>Error: {errorMessage}</div>
          ))
        }
        <input type="text" name="name" id="" placeholder="Name" value={userInput.name} onChange={onChangeHandler} />
        <input type="email" name="email" id="" placeholder="Email" value={userInput.email} onChange={onChangeHandler}/>
        <input type="password" name="password" id="" placeholder="Password" value={userInput.password} onChange={onChangeHandler}/>
        <button className="btn" type="submit">Register</button>
      </form>
    </section>
  )
}
