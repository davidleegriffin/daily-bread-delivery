import React, {  useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../store/cartActions';
import ProductDetail from './ProductDetail';
import './Cart.css';


function Cart() {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState();
  // const rawCart = localStorage.getItem("localCart");
  // const localCart = JSON.parse(rawCart);
  let stateCart = useSelector(state => state.cart);
  let subtotal = 0;

  const cartProducts = [
    {
      productName: "Cowboy Bebop",
      price: 3,
      description: "Great no-knead bread fermented in the moonlight overnight for superior flavor. Crust is flawless and the crumb has that old-school lattice.",
      imageURL: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-			    1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      productName: "Karems French Boule ",
      price: 2,
      description: "Traditional French bread from the original master chef, Antoine Karem!!",
      imageURL: "https://images.unsplash.com/photo-1603984042729-a34adc2ac9d0?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-			    1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      productName: "Farmhouse Wheat",
      price: 4,
      description: "Flavorful and Nutritious, makes customers say 'I would gladly spread peanut butter on this bread'",
      imageURL: "https://images.unsplash.com/photo-1533417177250-227597f5b264?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-			    1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      productName: "Smoked Bread",
      price: 3,
      description: "Proprietary technique that can only be purchased here. One of a kind Smoked Bread has a deep smoky flavor that will turn a ham sandwich into a smoked ham sandwich.",
      imageURL: "https://images.unsplash.com/photo-1511629036492-6c07153d3e83?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-			    1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      productName: "Rustic Italian/Ciabatta",
      price:  3,
      description: "Traditional bread of the Italian countryside. an everyday favorite.",
      imageURL: "https://images.unsplash.com/photo-1590346328376-f21c8e5b630e?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-			    1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      productName: "Irish Soda Bread",
      price: 3 ,
      description: "Traditional Irish soda bread. Tastes clean and refreshing, like a biscuit.",
      imageURL: "https://images.unsplash.com/photo-1584471973216-cadfdf0e15e5?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-			    1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      productName: "Rye Campaigne",
      price:  3,
      description: "Country style rye bread from the Alsace-Lorraine region between France and Germany",
      imageURL: "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-			    1.2.1&auto=format&fit=crop&w=500&q=60",
    }
  ]

  // useEffect(() => {
  //   const getProducts = async (dispatch) => {
  //     const res = await fetch('/api/products');
  //     const productTest = await res.json();
  //     console.log("product test", productTest);
  //     // await dispatch(() => setProducts(productTest));
  //   };
  //   getProducts();
  // }, []);

  // let test = getProducts();
  // console.log("test", test);


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

  console.log("stateCart", stateCart)
  const currentCart = cartConverter(stateCart);
  console.log("currentCart", currentCart);

  for (let [key, value] of Object.entries(currentCart)) {
    console.log("key", key, "value", value);
    subtotal += (cartProducts[(key-1)].price * value);
  }
  localStorage.setItem("subTotal", subtotal.toFixed(2));
  let tax = subtotal * .0825;
  localStorage.setItem("tax", tax.toFixed(2));
  let total = subtotal + tax;
  localStorage.setItem("total", total.toFixed(2));

  const emptyCart = async () => {
    await dispatch(cartActions.emptyCart());
  }

  return (
    <div className="cart__container--page">
      <div className="cart__container--navbar">
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
        <div>
        <button className="cart__button--emptyCart" onClick={ emptyCart }></button>
        </div>
        <div className="cart__container--monetary">
          <div>Subtotal: <span className="cart__money">${subtotal.toFixed(2)}</span></div>
          <div>Tax: <span className="cart__money">${tax.toFixed(2)}</span></div>
          <div>Total: <span className="cart__money">${total.toFixed(2)}</span></div>
        </div>
        <div>
          {/* <a href="https://davidleegriffin.github.io/" target="_blank" rel="noreferrer">
            <button className="cart__button--checkout">CHECKOUT</button>
          </a> */}
        <NavLink
          className="cart__navbar"
          to={{
            pathname: "/checkout",
            cartProps: {
              name: "cart"
            }
          }}>
          <button className="cart__button--checkout">Checkout</button>
        </NavLink>
        </div>

      </div>

      <div className="cart__container--products">
        {Object.entries(currentCart).map((product, idx) => <ProductDetail key={idx} props={product} />)}
      </div>



    </div>
  )
}

export default Cart;
