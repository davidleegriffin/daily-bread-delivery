import { fetch } from './csrf';


const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';


const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const login = (user) => async (dispatch) => {
  const { email, password } = user;
  const response = await fetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
  });
  dispatch(setUser(response.data.user));
  return response;
};

// export const portfolioAdd = (stock) => async () => {
//   const { stockSymbol, shares, userId } = stock;
//   console.log('in session-js', userId, 'stock', stock);
//   const response = await fetch('/api/portfolio', {
//     method: "POST",
//     body: JSON.stringify({
//       stockSymbol,
//       shares,
//       userId,
//     }),
//   });
//   return response;
// }

export const signup = (user) => async (dispatch) => {
  const { email, password, address, city, state, zip, avatar, baker } = user;
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      address,
      city,
      state,
      zip,
      avatar,
      baker,
    }),
  });
  dispatch(setUser(response.data.user));
  return response;
};

export const restoreUser = () => async dispatch => {
  const res = await fetch('/api/session');
  dispatch(setUser(res.data.user));
  return res;
};

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;