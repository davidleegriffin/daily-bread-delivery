import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  EMPTY_CART
} from './cartActions';

const cartReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case ADD_TO_CART:
      newState = Array.from(state);
      newState.push(action.productId);
      return newState;
    // case REMOVE_FROM_CART:
    //   newState = 
    case ADD_QUANTITY:
      newState = Array.from(state);
      newState.push(action.productId);
      return newState;
    case EMPTY_CART:
      newState =[];
      return newState;
    case SUB_QUANTITY:
      newState = Array.from(state);
      // newState.push(action.productId);
      return newState;
    default:
      return state;
  }
};

export default cartReducer;