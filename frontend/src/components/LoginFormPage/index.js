import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  // if (sessionUser) return (
  //   <Redirect to="/" />
  // );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    resetForm();
    return dispatch(sessionActions.login({ credential, password }))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  };

  const resetForm = () => {
    document.getElementById("loginForm").reset();
  };

  // resetForm();

  return (
    <div className="form-wrapper">
    <form className="form-login" onSubmit={handleSubmit} id="loginForm">
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <h2>Login</h2>  
      <div className="input-wrapper">
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required=""
          className="login-form__name"
          name=""
        />
        <label className="login-form__label--name">Username or Email</label>
      </div>
      <div className="input-wrapper">  
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required=""
          className="login-form__password"
            name=""
        />
        <label className="login-form__label--password">Password</label>
      </div>  
      <button type="submit" className="login-form__button">Log In</button>
    </form>
    </div>
  );
}

export default LoginFormPage;