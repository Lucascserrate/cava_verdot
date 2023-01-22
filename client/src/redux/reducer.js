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
  GET_CART,
  GET_DRINKS_BY_RATING,
  GET_USER_BY_ID
} from "./actions";

const initialState = {
  drinks: [],
  drink: [],
  categories: [],
  countries: [],
  bubbleCart: 0,
  cart: [],
  drinksRating: [],
  user: [],
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
        bubbleCart: action.payload.totalAmount,
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
    case GET_CART:
      return {
        ...state,
        cart: action.payload
      }
    case GET_DRINKS_BY_RATING:
      return{
        ...state,
        drinksRating: action.payload
      }
    case GET_USER_BY_ID:
      return{
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;
