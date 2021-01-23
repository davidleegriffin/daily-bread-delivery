export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const EMPTY_CART = 'EMPTY_CART';

export const addToCart = (productId) => {
  return {
    type: ADD_TO_CART,
    productId,
  };
};
export const removeFromCart = id => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};
export const subtractQuantity = id => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
export const addQuantity = (productId) => {
  return {
    type: ADD_QUANTITY,
    productId,
  };
};
export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};