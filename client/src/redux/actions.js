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
export const GET_DRINKS_BY_RATING = 'GET_DRINKS_BY_RATING';
export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';
export const PUT_DRINKS = "PUT_DRINKS"
export const CLEAR_CART = 'CLEAR_CART';
export const GET_REVIEWS = 'GET_REVIEWS';


// para el address
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_ALL_STATE = 'GET_ALL_STATE';
export const GET_ALL_CITIES = 'GET_ALL_CITIES';
export const GET_ADDRESS_BY_ID = 'GET_ADDRESS_BY_ID';


// Actions Creators get all products
export const getDrinks = () => {
  return async (dispatch) => {
    let datosApi = await axios.get("/products/");
    dispatch({ type: GET_DRINKS, payload: datosApi.data })
  }
}

export const putDrink = (value) => {
  return async (dispatch) => {
    try {
      const { id, name, category, stock, country, price } = value
      let editada = await axios.put(`/products?queryId=${id}`, {
        id: id,
        name: name,
        category: category,
        country: country,
        stock: stock,
        price, price
      })
      dispatch({ type: PUT_DRINKS, payload: editada })
    } catch (error) {
      console.log(error);
    }
  }
}

// Action Creators Para modificar la cantidad del carrito
export const modifyBubbleCart = id => async dispatch => {
  let json = await axios.get(`/shopingCart/totalAmount?userId=${id}`)
  return dispatch({ type: MODIFY_BUBBLE_CART, payload: json.data })
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
    const dataPost = await axios.post('/products', payload)

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
  let json = await axios.get(`/shopingCart?userId=${id}`)
  return dispatch({ type: GET_CART, payload: json.data })
}


export const getDrinksByRating = () => {
  return async (dispatch) => {
    const dataApi = await axios.get('/products/highScore')
    return dispatch({ type: GET_DRINKS_BY_RATING, payload: dataApi.data })
  }
}

export const setUser = (data) => {
  return async (dispatch) => {
    return dispatch({ type: SET_USER, payload: data })
  }
}

export const clearUser = () => {
  return async (dispatch) => {
    return dispatch({ type: CLEAR_USER })
  }
}

export const clearCart = () => {
  return async (dispatch) => {
    return dispatch({ type: CLEAR_CART });
  }
}

export const getAllCountries = () => {
  return async (dispatch) => {
    const dataApi = await axios.get('/users/address/allCountries');
    return dispatch({ type: GET_ALL_COUNTRIES, payload: dataApi.data });
  }
}
export const getAllStates = (countryId) => {
  return async (dispatch) => {
    const dataApi = await axios.get(`/users/address/allStates/${countryId}`);
    return dispatch({ type: GET_ALL_STATE, payload: dataApi.data });
  }
}
export const getAllCities = (stateId) => {
  return async (dispatch) => {
    const dataApi = await axios.get(`/users/address/allCities/${stateId}`);
    return dispatch({ type: GET_ALL_CITIES, payload: dataApi.data });
  }
}
export const getAddressById = (userId) => {
  return async (dispatch) => {
    const dataApi = await axios.get(`/users/address/${userId}`);
    return dispatch({ type: GET_ADDRESS_BY_ID, payload: dataApi.data });
  }
}

export const getReviews = userId => async dispatch => {
  let json = await axios.get(`/products/review/${userId}`)
  return dispatch({ type: GET_REVIEWS, payload: json.data })
}