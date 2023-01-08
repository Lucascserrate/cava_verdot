import { GET_DRINKS, MODIFY_CART } from "./actions";

const initialState = {
  drinks: [],
  cart: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRINKS:
      return {
        ...state,
        drinks: action.payload,
      };
    case MODIFY_CART:
      return {
        ...state,
        cart: parseInt(state.cart) + parseInt(action.payload)
      }
    default:
      return state;
  }
};

export default rootReducer;
