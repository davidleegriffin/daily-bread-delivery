import React, { useState } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


function Cart() {
  const history = useHistory();
  const rawCart = localStorage.getItem("localCart");
  const localCart = JSON.parse(rawCart);
  let stateCart = useSelector(state => state.cart);

  // console.log("cart", cart);
  // for (let key in cart) {
  //   console.log(key);
  // }

  const productsFetch = async () => {
    const response = await fetch("/api/products");
    const products = await response.json();
    return products;
  }

  const productFetch = async (id) => {
    const response = await fetch("/api/products", id);
    const product = await response.json();
    return await product;
  }

  console.log("fetchResult", productFetch({id: 4}));

  return (
    <div>
      <NavLink to={{
          pathname: "/home",
          cartProps: {
            name: "cart"
          }
        }}>Go To Home</NavLink>
      <h1>CART</h1>
      <p>{Object.keys(stateCart)}</p>
      <div>   { Object.keys(stateCart).map((item, i) => (
            <div key={i} className="report">
                    <h3>{stateCart[item]}</h3>
            </div>
    ))}</div>
    </div>
  )
}

export default Cart;