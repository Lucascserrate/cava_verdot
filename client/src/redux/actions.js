import axios from 'axios';
// Actions
export const MODIFY_BUBBLE_CART = 'MODIFY_BUBBLE_CART'
export const GET_DRINKS = 'GET_DRINKS';
export const GET_DRINK = 'GET_DRINK';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_PRODUCT_FILTER = 'GET_PRODUCT_FILTER';
export const GET_SORT = 'GET_SORT';
export const GET_DRINK_BY_NAME = 'GET_DRINK_BY_NAME';
export const POST_PRODUCT = 'POST_PRODUCT'
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_CART = 'GET_CART';


// Actions Creators get all products
export const getDrinks = () => {
  return async (dispatch) => {
    let datosApi = await axios.get("/products/");
    dispatch({ type: GET_DRINKS, payload: datosApi.data })
  }
}

// Action Creators Para modificar la cantidad del carrito
export const modifyBubbleCart = payload => dispatch => {
  return dispatch({ type: MODIFY_BUBBLE_CART, payload })
}

// Actions Creators get product id
export const getDrinkId = (id) => {
  return async (dispatch) => {
    let datosApi = await axios.get(`/products/${id}`);
    dispatch({ type: GET_DRINK, payload: datosApi.data })
  }
}

// Action creator get all categories
export const getAllCategories = () => {
  return async (dispatch) => {
    let datosApi = await axios.get('/categories/');
    dispatch({ type: GET_ALL_CATEGORIES, payload: datosApi.data });
  }
}

// Action creator get category product
export const getProductFilter = (category, price, country) => {
  return async (dispatch) => {
    try {
      let datosApi = await axios.get(`/products?category=${category}&price=${price}&country=${country}`);
      dispatch({ type: GET_PRODUCT_FILTER, payload: datosApi.data });
    } catch (error) {
      alert("No hay productos con esos filtros");
    }
  }
}

export const getSort = payload => async dispatch => {
  let json = await axios.get(`/order?direction=${payload}`)
  return dispatch({ type: GET_SORT, payload: json.data })
}

// Actions Creators get product by name
export const getDrinkName = (name) => {
  return async (dispatch) => {
    let datosApi = await axios.get("/products?name=" + name);
    dispatch({ type: GET_DRINK_BY_NAME, payload: datosApi.data })
  }
}

//Action PostProduct

export const PostProduct = (payload) => {
  return async function (dipatch) {
    const dataPost = await axios.post('/', payload)

    return dataPost
  }
}

// Action getCountries
export const getCountries = () => {
  return async (dispatch) => {
    const dataApi = await axios.get('/countries');
    dispatch({ type: GET_COUNTRIES, payload: dataApi.data })
  }
}

export const getCart = id => async dispatch => {
  let json = await axios.get(`http://localhost:3001/shopingCart?userId=${id}`)
  return dispatch({ type: GET_CART, payload: json.data })
}