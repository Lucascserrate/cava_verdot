import axios from 'axios';
// Actions
export const GET_DRINKS = 'GET_DRINKS';
export const GET_DRINK = 'GET_DRINK';

// Actions Creators get all products
export const getDrinks = () => {
  return async (dispatch) => {
    let datosApi = await axios.get("http://localhost:3001/products/");
    dispatch({type: GET_DRINKS, payload: datosApi})
  }
}

// Actions Creators get product id
export const getDrinkId = (id) => {
  return async (dispatch) => {
    let datosApi = await axios.get(`http://localhost:3001/products/${id}`);
    dispatch({type:GET_DRINK, payload: datosApi})
  }
}