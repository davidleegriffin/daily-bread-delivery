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
      <div>
        <img
          className="home__image--left"
          src="https://images.unsplash.com/photo-1549057188-efd70413345e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJha2VyeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="bakery action"
          width="120%"
          height="120%"
        >
        </img>
      </div>
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
      <div>
        <img
          className="home__image--right"
          src="https://images.unsplash.com/photo-1560427183-4efd29c38997?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGJha2VyeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="bakery peel action"
          width="120%"
          height="120%"
        >
        </img>
      </div>
      <div className="home__image-container--bottom">
        <img
          className="home__image--bottom"
          src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="bread"
          // width="60%"
         
        >
        </img>
      </div>
    </div>
  )
}

export default HomePage;