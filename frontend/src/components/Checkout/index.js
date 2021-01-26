import React, {  useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

import './Checkout.css';

function Checkout() {
  let stateCart = useSelector(state => state.cart);
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
          <span className="checkout__check">{stateCart[0]}</span>
          <span className="checkout__check">{stateCart[1]}</span>
          <span className="checkout__check">{stateCart[2]}</span>
          <span className="checkout__check">{stateCart[3]}</span>
          <span className="checkout__check">{stateCart[4]}</span>
          <span className="checkout__check">{stateCart[5]}</span>
          <span className="checkout__check">{stateCart[6]}</span>
          <span className="checkout__check">{stateCart[7]}</span>
          <span className="checkout__check">{stateCart[8]}</span>
          <span className="checkout__check">{stateCart[9]}</span>
          <span className="checkout__check">{stateCart[10]}</span>
          <span className="checkout__check">{stateCart[11]}</span>
          <span className="checkout__check">{stateCart[12]}</span>

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
