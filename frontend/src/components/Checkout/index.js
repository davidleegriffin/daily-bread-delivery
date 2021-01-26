import React, {  useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

import './Checkout.css';

function Checkout() {
  let stateCart = useSelector(state => state.cart);
  let sortedCart = stateCart.sort();
  console.log("sortedCart", sortedCart);
  let products = [];

  useEffect(() => {
    const getProducts = async (dispatch) => {
      const res = await fetch('/api/products');
      const productTest = await res.json();
      // console.log("product test", productTest);
      for (let i=0; i < productTest.length; i++) {
        // console.log(productTest[i]);
        products.push(productTest[i].productName);
        localStorage.setItem(i+1, productTest[i].productName);
      };
    };
    getProducts();
    return products;
  }, []);

  console.log("products", products);

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
          <span className="checkout__check">{(stateCart[0]) ? `id ${stateCart[0]}  -` : ""}{localStorage.getItem(`${sortedCart[0]}`)}</span>
          <span className="checkout__check">{(stateCart[1]) ? `id ${stateCart[1]}  -` : ""  }{localStorage.getItem(`${sortedCart[1]}`)}</span>
          <span className="checkout__check">{(stateCart[2]) ? `id ${stateCart[2]}  -` : ""  }{localStorage.getItem(`${sortedCart[2]}`)}</span>
          <span className="checkout__check">{(stateCart[3]) ? `id ${stateCart[3]}  -` : ""  }{localStorage.getItem(`${sortedCart[3]}`)}</span>
          <span className="checkout__check">{(stateCart[4]) ? `id ${stateCart[4]}  -` : ""  }{localStorage.getItem(`${sortedCart[4]}`)}</span>
          <span className="checkout__check">{(stateCart[5]) ? `id ${stateCart[5]}  -` : ""  }{localStorage.getItem(`${sortedCart[5]}`)}</span>
          <span className="checkout__check">{(stateCart[6]) ? `id ${stateCart[6]}  -` : ""  }{localStorage.getItem(`${sortedCart[6]}`)}</span>
          <span className="checkout__check">{(stateCart[7]) ? `id ${stateCart[7]}  -` : ""  }{localStorage.getItem(`${sortedCart[7]}`)}</span>
          <span className="checkout__check">{(stateCart[8]) ? `id ${stateCart[8]}  -` : ""  }{localStorage.getItem(`${sortedCart[8]}`)}</span>
          <span className="checkout__check">{(stateCart[9]) ? `id ${stateCart[9]}  -` : ""  }{localStorage.getItem(`${sortedCart[9]}`)}</span>
          <span className="checkout__check">{(stateCart[10]) ? `id ${stateCart[10]}  -` : ""  }{localStorage.getItem(`${sortedCart[10]}`)}</span>
          <span className="checkout__check">{(stateCart[11]) ? `id ${stateCart[11]}  -` : ""  }{localStorage.getItem(`${sortedCart[11]}`)}</span>
          <span className="checkout__check">{(stateCart[12]) ? `id ${stateCart[12]}  -` : ""  }{localStorage.getItem(`${sortedCart[12]}`)}</span>

        </div>
        <img src="./images/guest-check.png"></img>

      </div>
      <div className="checkout__container--credit">
        <img alt="credit card" src="./images/generic-credit-card.jpeg" />
        <div className="checkout__form-container--credit">
          <input className="checkout__credit-input--cardNum" type="text" placeholder="Credit Card #"></input>
          <div className="checkout__credit-subContainer">
            <input className="checkout__credit-input--expires" type="text" placeholder="EXP"></input>
            <input className="checkout__credit-input--cvv" type="text" placeholder="CVV"></input>
            <input className="checkout__credit-input--zip" type="text" placeholder="ZIP"></input>
          </div>
        </div>
        <button className="checkout__credit-card--submit">submit</button>
      </div>
    <img className="checkout__card-holder" src="https://cdnimg.webstaurantstore.com/images/products/xxl/395620/1461698.jpg" width="900"></img>
    </div>
  )
}

export default Checkout;
