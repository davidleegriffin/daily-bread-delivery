import React from 'react';
import { NavLink } from "react-router-dom";
import './ThankYou.css';

function ThankYou() {
  return (
    <div className="thanks__container--page">
      <div className="pyro">
      <div className="before"></div>
        <div className="after"></div>
        <div className="thanks__container--banner">
          <h1 className="thanks__banner">THANK YOU APP ACADEMY!!!!</h1>
        </div>
        <NavLink
              className="cart__navbar"
              to={{
                pathname: "/home",
                cartProps: {
                  name: "cart"
                }
              }}>
              <button className="checkout__button--home">Home</button>
          </NavLink>
      </div>
      <div className="rick__roll--video">
        <iframe title="rick-and-roll" width="420" height="345" src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1&mute=1" allow='autoplay'  frameborder="0" allowfullscreen></iframe>    </div>
      </div>
  )
}


export default ThankYou;