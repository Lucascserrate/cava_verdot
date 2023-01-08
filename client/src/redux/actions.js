import axios from 'axios';
// Actions
export const GET_DRINKS = 'GET_DRINKS'
export const MODIFY_CART = 'MODIFY_CART'


// Actions Creators
export const getDrinks = () => {
  return async (dispatch) => {
    let datosApi = await axios.get("http://localhost:3001/products/");
    dispatch({ type: GET_DRINKS, payload: datosApi })
  }
}

export const modifyCart = (payload) => dispatch => {
  return dispatch({ type: MODIFY_CART, payload })
}