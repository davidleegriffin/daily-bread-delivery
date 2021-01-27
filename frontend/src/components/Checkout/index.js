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
      for (let i = 0; i < productTest.length; i++) {
        let { id, productName, description, price } = productTest[i];
        // console.log({ id, productName, description, price });
        let cornelius = { id, productName, description, price };
        // console.log("cornelius", cornelius);
        products.push(productTest[i].productName, "      ", productTest[i].price);
        localStorage.setItem(i+1, JSON.stringify(cornelius));
      };
    };
    getProducts();
    return products;
  }, []);

  console.log("products", products);
  let localCart = [];
  for (let x = 1; x < 8; x++) {
    localCart.push(JSON.parse(localStorage.getItem(x)));
    console.log("local", localCart);
  }

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
          <span className="checkout__check--desc">{(stateCart[0]) ? (`id ${stateCart[0]}${" -  "} ${localCart[0].productName}`) : ""}</span><span className="checkout__check--price">{(stateCart[0]) ? `${" $ "} ${localCart[0].price}` : ""}</span>
          <span className="checkout__check--desc">{(stateCart[1]) ? (`id ${stateCart[1]}${" -  "} ${localCart[1].productName}`) : ""}</span><span className="checkout__check--price">{(stateCart[1]) ? `${" $ "} ${localCart[1].price}` : ""}</span>
          <span className="checkout__check--desc">{(stateCart[2]) ? (`id ${stateCart[2]}${" -  "} ${localCart[2].productName}`) : ""}</span><span className="checkout__check--price">{(stateCart[2]) ? `${" $ "} ${localCart[2].price}` : ""}</span>
          <span className="checkout__check--desc">{(stateCart[3]) ? (`id ${stateCart[3]}${" -  "} ${localCart[3].productName}`) : ""}</span><span className="checkout__check--price">{(stateCart[3]) ? `${" $ "} ${localCart[3].price}` : ""}</span>
          <span className="checkout__check--desc">{(stateCart[4]) ? (`id ${stateCart[4]}${" -  "} ${localCart[4].productName}`) : ""}</span><span className="checkout__check--price">{(stateCart[4]) ? `${" $ "} ${localCart[4].price}` : ""}</span>
          <span className="checkout__check--desc">{(stateCart[5]) ? (`id ${stateCart[5]}${" -  "} ${localCart[5].productName}`) : ""}</span><span className="checkout__check--price">{(stateCart[5]) ? `${" $ "} ${localCart[5].price}` : ""}</span>
          <span className="checkout__check--desc">{(stateCart[6]) ? (`id ${stateCart[6]}${" -  "} ${localCart[6].productName}`) : ""}</span><span className="checkout__check--price">{(stateCart[6]) ? `${" $ "} ${localCart[6].price}` : ""}</span>
          <span className="checkout__check--desc">{(stateCart[7]) ? (`id ${stateCart[7]}${" -  "} ${localCart[7].productName}`) : ""}</span><span className="checkout__check--price">{(stateCart[7]) ? `${" $ "} ${localCart[7].price}` : ""}</span>
          <span className="checkout__check--desc">{(stateCart[8]) ? (`id ${stateCart[8]}${" -  "} ${localCart[8].productName}`) : ""}</span><span className="checkout__check--price">{(stateCart[8]) ? `${" $ "} ${localCart[8].price}` : ""}</span>
          <span className="checkout__check--desc">{(stateCart[9]) ? (`id ${stateCart[9]}${" -  "} ${localCart[9].productName}`) : ""}</span><span className="checkout__check--price">{(stateCart[9]) ? `${" $ "} ${localCart[9].price}` : ""}</span>
          <span className="checkout__check--desc">{(stateCart[10]) ? (`id ${stateCart[10]}${" -  "} ${localCart[10].productName}`) : ""}</span><span className="checkout__check--price">{(stateCart[10]) ? `${" $ "} ${localCart[10].price}` : ""}</span>
          <span className="checkout__check--desc">{(stateCart[11]) ? (`id ${stateCart[11]}${" -  "} ${localCart[11].productName}`) : ""}</span><span className="checkout__check--price">{(stateCart[11]) ? `${" $ "} ${localCart[11].price}` : ""}</span>

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
