import axios from 'axios';
// Actions
export const GET_DRINKS = 'GET_DRINKS'

// Actions Creators
export const getDrinks = () => {
  return async (dispatch) => {
    let datosApi = await axios.get("http://localhost:3001/products/");
    dispatch({type: GET_DRINKS, payload: datosApi})
  }
}