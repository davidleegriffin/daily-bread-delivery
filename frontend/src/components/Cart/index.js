import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import ProductDetail from './ProductDetail';


function Cart() {
  const rawCart = localStorage.getItem("localCart");
  const localCart = JSON.parse(rawCart);
  let stateCart = useSelector(state => state.cart);

  // const productFetch = async () => {
  //   let response = await fetch("/api/products");
  //   let products = await response.json();
  //   console.log("++++++++++++++products+++++++++++++++++++", products[0]);
  //   return products;
  // }

  function cartConverter(array) {
    let cartObject = {};
    for (let i = 0; i < array.length; i++) {
      let currentValue = array[i];
      if (cartObject[currentValue] === undefined) {
        cartObject[currentValue] = 1;
      } else {
        cartObject[currentValue] += 1;
      }
    }
    return cartObject;
  };

  const currentCart = cartConverter(stateCart);
  for (let [key, value] of Object.entries(currentCart)) {
    console.log(`${key}: ${value}`);
    // switch (key) {
    //   case '1':
    //     console.log(products[0].price);
    //     break;
    //   case '2':
    //     console.log(products[1]);
    //     break;
    //   case '3':
    //     console.log(products[2]);
    //     break;
    //   case '4':
    //     console.log(products[3]);
    //     break;
    //   case '5':
    //     console.log(products[4]);
    //     break;
    //   case '6':
    //     console.log(products[5]);
    //     break;
    //   case '7':
    //     console.log(products[6]);
    //     break;
    //   default:
    //     console.log("sorry");
    // }

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
      <div>{Object.entries(currentCart).map((product, idx) => <ProductDetail key={idx} props={product} />)}</div>
    </div>
  )
}

export default Cart;