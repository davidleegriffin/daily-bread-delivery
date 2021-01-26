import {
  ADD_TO_CART,
  // REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  EMPTY_CART,
  GET_PRODUCTS,
} from './cartActions';


// export const getProducts = () => async (dispatch) => {
//   const [products, setProducts] = useState([]);
//   const res = await fetch ('api/products');
//   dispatch(setProducts(res));
//   return res;
// }

const cartReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case GET_PRODUCTS:
      newState = Object.assign({}, action.products);
      return newState;
    case ADD_TO_CART:
      newState = Array.from(state);
      newState.push(action.productId);
      return newState;
    // case REMOVE_FROM_CART:
    case ADD_QUANTITY:
      newState = Array.from(state);
      newState.push(action.productId);
      return newState;
    case SUB_QUANTITY:
      newState = Array.from(state);
      return newState;
    case EMPTY_CART:
      newState =[];
      return newState;
    default:
      return state;
  }
};

export default cartReducer;
