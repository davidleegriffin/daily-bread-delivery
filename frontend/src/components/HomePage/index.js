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
    history.push("/");
    dispatch(sessionActions.logout());
  };
  return (
    <div className="home__main-container">
      <div className="home__image-container--logo">
        <img src="./images/wheat-ear.png" alt="wheat ear" width="64px" height="64px" />
        <span className="home__text-container--banner">
          Daily Bread Delivery
        </span>
      </div>
      <div className="home__image-container--cart">
        <img src="./images/shopping-cart.png" alt="shopping cart" width="60px" height="60px" />  
      </div>
      <div className="home__button-container--logout">
        <button className="logout-button" onClick={logout}>Log Out</button>
      </div>
      <div></div>
      <div className="home__image-container--chalkboard">
        <span className="home__chalkboard-text--container">
            <h2>WELCOME TO DAILY BREAD DELIVERY</h2>
          <p className="home__chalkboard-text--content">
            We bake bread daily from scratch in the morning and 
            deliver same day to your door
          </p>
          <p>
            Choose from any of our fine breads below, and 
            select to add to cart, checkout, and if before 9pm,
            delivery will be next day
          </p>
        </span>
      </div>
    </div>
  )
}

export default HomePage;