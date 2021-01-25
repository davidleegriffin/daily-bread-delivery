import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

import './Checkout.css';

function Checkout() {
  let stateCart = useSelector(state => state.cart);

  return (
    <div className="checkout__container--page">
      <h1>Checkout</h1>
      <p>{stateCart}</p>
      <NavLink
          className="cart__navbar"
          to={{
            pathname: "/home",
            cartProps: {
              name: "cart"
            }
          }}>
          <button className="cart__button--home">Home</button>
      </NavLink>
    </div>
   
  )
}

export default Checkout;