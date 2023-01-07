import { GET_DRINKS, GET_DRINK } from "./actions";

const initialState = {
  drinks: [],
  drink: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRINKS:
      return {
        ...state,
        drinks: action.payload,
      };
    case GET_DRINK:
      return{
        ...state,
        drink: action.payload,
      }
    default:
      return state;
  }
};

export default rootReducer;
