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

  // async function productsFetch() {
  //   const res = await fetch("/api/products");
  //   const products = await res;
  //   return products;
  // }

  const productFetch = async () => {
    let response = await fetch("/api/products");
    console.log("products", products);
    let products = await response.json();
    return products;
  }

  // const getProducts = async () => {
  //   const result = await productFetch();
  //   const rebounce = await result;
  //   return rebounce;
  // }

  // const products = productFetch();
  console.log("productFetch", productFetch());

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