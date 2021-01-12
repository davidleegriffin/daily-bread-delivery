import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import './HomePage.css';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
              ...style,
              display: "inline",
              background: "rgba(0,0,0,0.75)",
              borderRadius: "50%",
              border: "1px solid black",
              marginRight: "10%",
              boxShadow: "0px 0px 25px 20px rgba(230, 230, 4, 0.5)"
            }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
              ...style,
              display: "inline",
              background: "rgba(0,0,0,0.75)",
              borderRadius: "50%",
              border: "1px solid black",
              size: "50px",
              marginLeft: "13%",
              boxShadow: "0px 0px 25px 20px rgba(230, 230, 4, 0.5)",
              zIndex: "2"
      }}
      onClick={onClick}
    />
  );
}

function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState();
  const [cart, setCart] = useState([]);
  
  const settings = {
    dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      adaptiveHeight: true,
      centerMode: true,
      centerPadding: '150px',
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
  };

  const logout = (e) => {
    e.preventDefault();
    history.push("/");
    dispatch(sessionActions.logout());
  };

  let localCart = localStorage.getItem("cart");

  const addItem = (e) => {
    console.log("e-target", e.target.value);
    let item = {};
    item.id = parseInt(e.target.value);
    item.quantity = parseInt(document.getElementById(`quantity${item.id}`).value);
    console.log("item-quantity", item.quantity);
    let cartCopy = [...cart];
    console.log("cartCopy", cartCopy);
    // console.log("localCart", localCart);
    // let { ID } = item;
    let existingItem = cartCopy.find(cartItem => console.log(cartItem[0]));
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cartCopy.push(`{id:${item.id},quantity:${item.quantity}}`)
    }
    setCart(cartCopy)
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart)
  }


  const updateItem = (itemID, amount) => {
    let cartCopy = [...cart]
    let existentItem = cartCopy.find(item => item.ID == itemID);
    if (!existentItem) return;
    existentItem.quantity += amount;
    if (existentItem.quantity <= 0) {
      cartCopy = cartCopy.filter(item => item.ID != itemID)
    }
    setCart(cartCopy);
    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem("cart", cartString);
   }

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart)
  }, []);

  return (
    <div className="home__main-container">
      <div className="home__image-container--logo">
        <img src="./images/wheat-ear.png" alt="wheat ear" width="64px" height="64px" />
        <span className="home__text-container--banner">
          Daily Bread Delivery
        </span>
      </div>
      <div className="home__image-container--cart">
        <img src="./images/shopping-cart.png" alt="shopping cart" width="60px" height="60px" />  
      </div>
      <div className="home__button-container--logout">
        <button className="home__logout-button" onClick={logout}>Log Out</button>
      </div>
  
      <div className="home__image-container--chalkboard ">
        <span className="home__chalkboard-text--container">
            <h2>WELCOME TO DAILY BREAD DELIVERY</h2>
          <p className="home__chalkboard-text--content">
            We bake bread daily from scratch in the morning and 
            deliver same day to your door
          </p>
          <p>
            Choose from any of our fine breads below, and 
            select to add to cart, checkout, and if before 9pm,
            delivery will be next day
          </p>
        </span>
      </div>
      <div className="home__image-container--bottom effects">
        <Slider {...settings}>
          <div className="home__slider-elements">
            <h2>
              Cowboy Bebop
              <button className="home__addToCart-button" onClick={addItem} value="1">Add to Cart</button>
              <input type="text" id="quantity1"></input>
            </h2>
            <img
              className="home__image--bottom"
              src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="bread-1"
            >
            </img>
          </div>
          <div className="home__slider-elements">
            <h2>
              <button className="home__addToCart-button" onClick={addItem} value="2">Add to Cart</button>
              <input type="text" id="quantity2"></input>
            </h2>
            <img
              className="home__image--bottom"
              src="https://images.unsplash.com/photo-1603984042729-a34adc2ac9d0?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="bread-2"
            >
            </img>
          </div>
          <div className="home__slider-elements">
            <h2>
              <button className="home__addToCart-button" onClick={addItem} value="3">Add to Cart</button>
              <input type="text" id="quantity3"></input>
            </h2>
            <img
              className="home__image--bottom"
              src="https://images.unsplash.com/photo-1533417177250-227597f5b264?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="bread-3"
            >
            </img>
          </div>
          <div className="home__slider-elements">
            <h2>
              <button className="home__addToCart-button" onClick={addItem} value="4">Add to Cart</button>
              <input type="text" id="quantity4"></input>
            </h2>
            <img
              className="home__image--bottom"
              src="https://images.unsplash.com/photo-1511629036492-6c07153d3e83?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="bread-4"
            >
            </img>
          </div>
          <div className="home__slider-elements">
            <h2>
              <button className="home__addToCart-button" onClick={addItem} value="5">Add to Cart</button>
              <input type="text" id="quantity5"></input>
            </h2>
            <img
              className="home__image--bottom"
              src="https://images.unsplash.com/photo-1590346328376-f21c8e5b630e?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="bread-5"
            >
            </img>
          </div>
          <div className="home__slider-elements">
            <h2>
              <button className="home__addToCart-button" onClick={addItem} value="6">Add to Cart</button>
              <input type="text" id="quantity6"></input>
            </h2>
            <img
              className="home__image--bottom"
              src="https://images.unsplash.com/photo-1584471973216-cadfdf0e15e5?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="bread-6"
            >
            </img>
          </div>
          <div className="home__slider-elements">
            <h2>
            <button className="home__addToCart-button" onClick={addItem} value="7">Add to Cart</button>
              <input type="text" id="quantity7"></input>            </h2>
            <img
              className="home__image--bottom"
              src="https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="bread-7"
            >
            </img>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default HomePage;