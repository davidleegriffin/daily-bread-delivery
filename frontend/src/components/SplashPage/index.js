import React from 'react';
// import * as sessionActions from "../../store/session";
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './SplashPage.css';

function SplashPage() {
  const sessionUser = useSelector(state => state.session.user);
  // const [userId, setUserId] = useState();
  // const dispatch = useDispatch();
  // const [errors, setErrors] = useState([]);
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
      <img className="splash__image--background" alt="background-splash" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" ></img>
      <div className="splash__main-intro effects">
        <span className="splash__intro-text--banner"><h2>WELCOME!</h2></span>
        <span className="splash__intro-text">
          Daily Bread Delivery is the fresh new concept in Artisinal bread. 
          Baked fresh daily by a human using human-friendly ingredients, 
          then delivered to your door that day so it's freshness can be 
          enjoyed to the fullest.
        </span>
      </div>
      <div className="splash__button-container--right">
        <button className="splash__signup-button" onClick={signupSplash}>Signup</button>
      </div>
    </div>
  )
};

export default SplashPage;