import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import SplashPage from './components/SplashPage';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState();
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div>
 
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route>
            <SplashPage />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
