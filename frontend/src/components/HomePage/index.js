import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store';
import Cart from '../Cart';
import * as sessionActions from '../../store/session';
import * as cartActions from '../../store/cartActions';
import { NavLink, Link, useHistory } from "react-router-dom";
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
              marginRight: "25%",
              marginTop: "-20%",
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
              marginLeft: "25%",
              marginTop: "-20%",
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
  // const [isLoaded, setIsLoaded] = useState();
  // const [cart, setCart] = useState([]);
  const cartQuantity = useSelector(state => state.cart.length);
  let cart = useSelector(state => state.cart);

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

  // const goToCart = async (e) => {
  //   await console.log("Mic check");
  //   history.push("/splash");
  // };

  const logout = async (e) => {
    e.preventDefault();
    await dispatch(sessionActions.logout());
    history.push("/");
  };

  const addItem = async (e) => {
    e.preventDefault();
    const productId = e.target.value;
    // console.log("++++++", cartConverter(cart));
    let localCart = cartConverter(cart);
    let localString = JSON.stringify(localCart);
    // console.log(localString);
    await localStorage.setItem("localCart", localString);
    await dispatch(cartActions.addToCart(productId));
  };

  // const Cart = React.forwardRef((cart, ref) => (
  //   <a ref={ref} {...cart}>💅 {cart.children}</a>
  // ))

  return (
    <div className="home__main-container">
      <div className="home__image-container--logo">
        <img src="./images/wheat-ear.png" alt="wheat ear" width="64px" height="64px" />
        <span className="home__text-container--banner">
          Daily Bread Delivery
        </span>
      </div>
      <div className="home__image-container--cart">
        <div className="home__container-image">
            <span className="home__button-cart--text">Go to Cart</span> 
            <NavLink to={{
              pathname: "/order",
              homeProps: {
                name: "cart"
              }
            }}>
              <img src="./images/shopping-cart.png" alt="shopping cart" width="60px" height="60px" />
            </NavLink>
        </div>
          <span className="home__cart--quantity">{cartQuantity}</span>
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
              <button className="home__addToCart-button" onClick={addItem} value="1">
                <img src="./images/shopping-cart.png" className="home__image--add" alt="shopping cart" width="30px" height="30px" />
                <span className="home__button-text">Add to Cart</span>
              </button>
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
              Karem's French Boule
              <button className="home__addToCart-button" onClick={addItem} value="2">
                <img src="./images/shopping-cart.png" className="home__image--add" alt="shopping cart" width="30px" height="30px" />
                <span className="home__button-text">Add to Cart</span>
              </button>
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
              Farmhouse Wheat
              <button className="home__addToCart-button" onClick={addItem} value="3">
                <img src="./images/shopping-cart.png" className="home__image--add" alt="shopping cart" width="30px" height="30px" />
                <span className="home__button-text">Add to Cart</span>
              </button>
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
              Smoked Bread
              <button className="home__addToCart-button" onClick={addItem} value="4">
                <img src="./images/shopping-cart.png" className="home__image--add" alt="shopping cart" width="30px" height="30px" />
                <span className="home__button-text">Add to Cart</span>
              </button>
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
              Rustic Italian/Ciabatta
              <button className="home__addToCart-button" onClick={addItem} value="5">
                <img src="./images/shopping-cart.png" className="home__image--add" alt="shopping cart" width="30px" height="30px" />
                <span className="home__button-text">Add to Cart</span>
              </button>
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
              Irish Soda Bread
              <button className="home__addToCart-button" onClick={addItem} value="6">
                <img src="./images/shopping-cart.png" className="home__image--add" alt="shopping cart" width="30px" height="30px" />
                <span className="home__button-text">Add to Cart</span>
              </button>
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
              Rye Campaigne
              <button className="home__addToCart-button" onClick={addItem} value="7">
                <img src="./images/shopping-cart.png" className="home__image--add" alt="shopping cart" width="30px" height="30px" />
                <span className="home__button-text">Add to Cart</span>
              </button>
            </h2>
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