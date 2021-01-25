import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import SplashPage from './components/SplashPage';
import HomePage from './components/HomePage';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState();
  // const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div>
      {isLoaded && (
        <Switch>
          <Route path="/login" component={ LoginFormPage }/>
          <Route path="/signup" component={ SignupFormPage } />
          <Route exact path="/" component={ SplashPage } />
          <Route exact path="/checkout" component ={Checkout} />
          <Route exact path="/order" component={Cart} />
          <Route exact path="/home" component={HomePage} />
        </Switch>
      )}
    </div>
  );
}

export default App;
