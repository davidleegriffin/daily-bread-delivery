import React from 'react';
import { NavLink } from "react-router-dom";
import './ThankYou.css';

function ThankYou() {
  return (
    <div>
      <h1>THANK YOU APP ACADEMY!!!!</h1>
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
  )
}


export default ThankYou;