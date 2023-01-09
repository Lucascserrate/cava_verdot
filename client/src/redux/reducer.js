import { GET_DRINKS, GET_DRINK, GET_ALL_CATEGORIES, GET_CATEGORY_PRODUCT, MODIFY_CART, POST_PRODUCT } from "./actions";

const initialState = {
  drinks: [],
  drink: [],
  categories: [],
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
    case GET_DRINK:
      return {
        ...state,
        drink: action.payload,
      }
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }
    case GET_CATEGORY_PRODUCT:
      return {
        ...state,
        drinks: action.payload,
      }
      case POST_PRODUCT:
        return{
          ...state,
        }
    default:
      return state;
  }
};

export default rootReducer;
