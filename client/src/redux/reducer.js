import {
  GET_DRINKS,
  GET_DRINK,
  GET_ALL_CATEGORIES,
  GET_PRODUCT_FILTER,
  MODIFY_BUBBLE_CART,
  GET_SORT,
  GET_DRINK_BY_NAME,
  POST_PRODUCT,
  GET_COUNTRIES,
} from "./actions";

const initialState = {
  drinks: [],
  drink: [],
  categories: [],
  bubbleCart: 0,
  countries: [],
  cart: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRINKS:
      return {
        ...state,
        drinks: action.payload,
      };
    case MODIFY_BUBBLE_CART:
      return {
        ...state,
        bubbleCart: parseInt(state.bubbleCart) + parseInt(action.payload),
      };
    case GET_DRINK:
      return {
        ...state,
        drink: action.payload,
      };
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_PRODUCT_FILTER:
      return {
        ...state,
        drinks: action.payload,
      };
    case GET_SORT:
      return {
        ...state,
        drinks: action.payload,
      };
    case GET_DRINK_BY_NAME:
      return {
        ...state,
        drinks: action.payload,
      };
    case POST_PRODUCT:
      return {
        ...state,
      };
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      }
    default:
      return state;
  }
};

export default rootReducer;
