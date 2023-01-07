import { GET_DRINKS } from "./actions";

const initialState = {
  drinks: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRINKS:
      return {
        ...state,
        drinks: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
