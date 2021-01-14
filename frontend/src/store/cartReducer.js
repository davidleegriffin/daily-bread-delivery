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
    default:
      return state;
  }
};

export default cartReducer;