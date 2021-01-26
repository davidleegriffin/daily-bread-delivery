import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  if (sessionUser) return (<Redirect to="/" />);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    resetForm();
    return dispatch(sessionActions.login({ email, password }))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  };

  const demoSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    resetForm();
    return dispatch(sessionActions.login( "demo@user.io", "password" ))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  };

  const resetForm = () => {
    document.getElementById("loginForm").reset();
  };

  const welcomeSplash = (e) => {
    // e.preventDefault();
    history.push("/");
  };

  const signupSplash = (e) => {
    history.push("/signup");
  };

  return (
    <div className="login__form-wrapper">
      <div>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
      </div>
      <div className="login__button-container--left">
        <button className="login__signup-button" onClick={signupSplash}>Signup</button>
      </div>
      <img className="login__image--background" alt="background-login" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" ></img>
      <form className="login__form-login effects" onSubmit={handleSubmit} id="loginForm">
        <div className="login__input-wrapper--main">  
          <span>Login</span>  
          <div className="login__input-wrapper--email">
            <label className="login__input-label--email">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required=""
              className="login__input--email"
              name=""
            />
          </div>
          <div className="login__input-wrapper--password">  
            <label className="login__input-label--password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required=""
              className="login__input--password"
                name=""
            />
          </div>  
          <button type="submit" className="login__submit-button">Log In</button>
          <button className="login__submit-button--demo">Demo-Login</button>
        </div>    
      </form>
      <div className="login__button-container--right">
        <button className="login__welcome-button" onClick={welcomeSplash}>Welcome</button>
      </div>
    </div>
  );
}

export default LoginFormPage;