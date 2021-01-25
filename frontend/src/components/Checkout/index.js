import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

import './Checkout.css';

function Checkout() {
  let stateCart = useSelector(state => state.cart);

  return (
    <div className="checkout__container--page">
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
      <h1>Checkout</h1>
      <div className="checkout__check-container">
        <div className="checkout__check-text">
          <span className="checkout__check">{ stateCart }</span>
          test
        </div>
        <img src="https://cdn.shopify.com/s/files/1/0586/2193/products/GC36321__30_R_1024x1024.jpg?v=1591899775"></img>

      </div>
    </div>
  )
}

export default Checkout;
