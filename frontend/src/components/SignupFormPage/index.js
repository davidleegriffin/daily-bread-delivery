import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
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
  const [zip, setZip] = useState(null);
  const [avatar, setAvatar] = useState("");
  const [baker, setBaker] = useState(false);
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      resetForm();
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

  

  return (
    <form onSubmit={handleSubmit} id="signupForm">
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <div className="form-signup__wrapper">
      <label className="signup-label">
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="signup-fields"
        />
      </label>
      <label className="signup-label">
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="signup-fields"
      />
      </label>
      <label className="signup-label">
        Confirm Password
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="signup-fields"
        />
      </label>
      <label className="signup-label">
        Address
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="signup-fields"
        />
      </label>
      <label className="signup-label">
        City
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          className="signup-fields"
        />
      </label> 
      <label className="signup-label">
        State
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
          className="signup-fields"
        />
      </label> 
      <label className="signup-label">
        Zip Code
        <input
          type="integer"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          required
          className="signup-fields"
        />
      </label> 
      <label className="signup-label">
        Avatar/Picture
        <input
          type="text"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          className="signup-fields"
        />
      </label>
      <label className="signup-label">
        Are You a Baker?
        <input
          type="radio"
          value={baker}
          onChange={(e) => setBaker(e.target.value)}
          required
          className="signup-fields"
        />
      </label>  
      <button className="signup-button" type="submit">Sign Up</button>
      </div>
    </form>
  );
}

export default SignupFormPage;
