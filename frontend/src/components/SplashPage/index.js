import React, { useState, useEffect } from 'react';
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './SplashPage.css';

function SplashPage() {
  const sessionUser = useSelector(state => state.session.user);
  // const [userId, setUserId] = useState();
  // const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  if (sessionUser) return (<Redirect to="/home" />);

  const loginSplash = (e) => {
    history.push("/login");
  };

  const signupSplash = (e) => {
    history.push("/signup");
  };


  return (
    <div className="splash__main-container">
      <div className="splash__button-container--left">
        <button className="splash__login-button" onClick={loginSplash}>Login</button>
      </div>
      <img className="splash__image--background" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" ></img>
      <div className="splash__main-intro effects">
        <span className="splash__intro-text">
          lorem cuchucha macho labrador del puny los muttonaise jolta
          como hacer tu bien almost done with this project
        </span>
      </div>
      <div className="splash__button-container--right">
        <button className="splash__signup-button" onClick={signupSplash}>Signup</button>
      </div>
    </div>
  )
};

export default SplashPage;