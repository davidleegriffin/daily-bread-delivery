import React from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from "react-router-dom";

import './HomePage.css';

function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = (e) => {
    // e.preventDefault();
    history.push("/login");
    dispatch(sessionActions.logout());
  };
  return (
    <div>
      <h1>HOME PAGE!</h1>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </div>
  )
}

export default HomePage;