import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import SplashPage from './components/SplashPage';
import HomePage from './components/HomePage';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState();
  const [cart, setCart] = useState([]);
  // const sessionUser = useSelector(state => state.session.user);

  let localCart = localStorage.getItem("cart");

  const addItem = (item) => {
    let cartCopy = [...cart];
    let { ID } = item;
    let existingItem = cartCopy.find(cartItem => cartItem.ID == ID);
    if (existingItem) {
      existingItem.quantity += item.quantity
    } else {
      cartCopy.push(item)
    }
    setCart(cartCopy)
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart)
  }

  const updateItem = (itemID, amount) => {}
  const removeItem = (itemID) => {}

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart)
  }, []);

  return (
    <div>
      {isLoaded && (
        <Switch>
          <Route path="/login" component={ LoginFormPage }/>
          <Route path="/signup" component={ SignupFormPage } />
          <Route exact path="/" component={ SplashPage } />
          <Route exact path="/home" component={ HomePage } />
        </Switch>
      )}
    </div>
  );
}

export default App;
