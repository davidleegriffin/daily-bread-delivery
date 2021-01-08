import React, { useState, useEffect } from 'react';
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import './SplashPage.css';

function SplashPage() {
  // const sessionUser = useSelector(state => state.session.user);
  // const [userId, setUserId] = useState();
  // const dispatch = useDispatch();
  // const [errors, setErrors] = useState([]);

  return (
    <div className="splash__main-container">
      SPLASH!
    </div>
  )
};

export default SplashPage;