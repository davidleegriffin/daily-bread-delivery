import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [avatar, setAvatar] = useState("");
  const [baker, setBaker] = useState(false);
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      resetForm();
      <Redirect to="/home" />
      return dispatch(sessionActions.signup({ email, password, address, city, state, zip, avatar, baker}))
      .catch(res => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
    }
    
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const resetForm = () => {
    document.getElementById("signupForm").reset();
  };

  const welcomeSplash = (e) => {
    history.push("/");
  };

  const loginSplash = (e) => {
    history.push("/login");
  };

  return (
    <div className="signup__main-container">
      <div className="signup__button-container--left">
        <button className="signup__welcome-button" onClick={welcomeSplash}>Welcome</button>
      </div>
      <div className="signup__error-container">
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
      </div>
      <img className="signup__image--background" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" ></img>
      <div className="signup__form-container">
        <form onSubmit={handleSubmit} id="signupForm">
          <div className="form-signup__wrapper">
          <label className="signup__input-label">
            Email
          </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="signup__input-fields"
            />
          <label className="signup__input-label">
            Password
          </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="signup__input-fields"
          />
          <label className="signup__input-label">
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="signup__input-fields"
            />
          </label>
          <label className="signup__input-label">
            Address
          </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="signup__input-fields"
            />
          <label className="signup__input-label">
            City
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="signup__input-fields"
            />
          </label> 
          <label className="signup__input-label">
            State
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              className="signup__input-fields"
            />
          </label> 
          <label className="signup__input-label">
            Zip Code
            <input
              type="integer"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              required
              className="signup__input-fields"
            />
          </label> 
          <label className="signup__input-label">
            Avatar/Picture
            <input
              type="text"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              className="signup__input-fields"
            />
          </label>
          <label className="signup__input-label--baker">
            Are You a Baker?
            <input
              type="radio"
              value={baker}
              onChange={(e) => setBaker(e.target.value)}
              required
              className="signup__input-fields--baker"
            />yes
          </label>  
          <button className="signup__submit-button" type="submit">Sign Up</button>
          </div>
        </form>
      </div>
      <div className="signup__button-container--right">
        <button className="signup__login-button" onClick={loginSplash}>Login</button>
      </div>
    </div>
  );
}

export default SignupFormPage;
