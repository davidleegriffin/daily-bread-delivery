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
    </div>
  )
}


export default ThankYou;