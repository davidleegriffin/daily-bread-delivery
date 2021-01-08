import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

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

  const resetForm = () => {
    document.getElementById("loginForm").reset();
  };

  return (
    <div className="login__form-wrapper">
      <div>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
      </div>
      <form className="login__form-login" onSubmit={handleSubmit} id="loginForm">
        <div className="login__input-wrapper--main">  
          <h2>Login</h2>  
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
        </div>    
      </form>
    </div>
  );
}

export default LoginFormPage;