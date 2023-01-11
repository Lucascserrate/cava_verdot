import axios from 'axios';
// Actions
export const MODIFY_CART = 'MODIFY_CART'
export const GET_DRINKS = 'GET_DRINKS';
export const GET_DRINK = 'GET_DRINK';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_CATEGORY_PRODUCT = 'GET_CATEGORY_PRODUCT';
export const GET_SORT = 'GET_SORT';
export const GET_DRINK_BY_NAME = 'GET_DRINK_BY_NAME';
export const POST_PRODUCT = 'POST_PRODUCT'


// Actions Creators get all products
export const getDrinks = () => {
  return async (dispatch) => {
    let datosApi = await axios.get("http://localhost:3001/products/");
    dispatch({ type: GET_DRINKS, payload: datosApi.data })
  }
}

// Action Creators Para modificar la cantidad del carrito
export const modifyCart = payload => dispatch => {
  return dispatch({ type: MODIFY_CART, payload })
}

// Actions Creators get product id
export const getDrinkId = (id) => {
  return async (dispatch) => {
    let datosApi = await axios.get(`http://localhost:3001/products/${id}`);
    dispatch({ type: GET_DRINK, payload: datosApi.data })
  }
}

// Action creator get all categories
export const getAllCategories = () => {
  return async (dispatch) => {
    let datosApi = await axios.get('http://localhost:3001/categories/');
    dispatch({ type: GET_ALL_CATEGORIES, payload: datosApi.data });
  }
}

// Action creator get category product
export const getCategoryProduct = (category) => {
  return async (dispatch) => {
    let datosApi = await axios.get(`http://localhost:3001/products?category=${category}`);
    dispatch({ type: GET_CATEGORY_PRODUCT, payload: datosApi.data });
  }
}

export const getSort = payload => async dispatch => {
  let json = await axios.get(`http://localhost:3001/order?direction=${payload}`)
  return dispatch({ type: GET_SORT, payload: json.data })
}

// Actions Creators get product by name
export const getDrinkName = (name) => {
  return async (dispatch) => {
    let datosApi = await axios.get("http://localhost:3001/products?name=" + name);
    dispatch({ type: GET_DRINK_BY_NAME, payload: datosApi.data })
  }
}

//Action PostProduct

export const PostProduct = (payload) => {
  return async function (dipatch) {
    const dataPost = await axios.post('http://localhost:3001/', payload)

    return dataPost
  }
}

