import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


function Cart() {
  const history = useHistory();
  const rawCart = localStorage.getItem("localCart");
  const cart = JSON.parse(rawCart);
  console.log("cart", cart);
  for (let key in cart) {
    console.log(key);
  }

  const goHome = async (e) => {
    await history.push("/home");
  };

  return (
    <div>
      <h1>CART</h1>
      <p>{ Object.keys(cart) }</p>
      <button onClick={goHome}>HOME</button>
    </div>
  )
}

export default Cart;