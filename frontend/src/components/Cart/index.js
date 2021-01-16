import React, { useState } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


function Cart() {
  const history = useHistory();
  const rawCart = localStorage.getItem("localCart");
  const cart = JSON.parse(rawCart);
  console.log("cart", cart);
  for (let key in cart) {
    console.log(key);
  }

 

  return (
    <div>
      <NavLink to={{
          pathname: "/home",
          cartProps: {
            name: "cart"
          }
        }}>Go To Home</NavLink>
      <h1>CART</h1>
      <p>{ Object.keys(cart) }</p>
    </div>
  )
}

export default Cart;