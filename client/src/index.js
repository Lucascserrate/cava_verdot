import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store';
import axios from 'axios'

// en caso de trabajar con el back en local, descomentar esta linea y comentar la otra
// axios.defaults.baseURL = 'http://localhost:3001';
// axios.defaults.baseURL = 'https://cavaverdot-production.up.railway.app';

const token = window.localStorage.getItem("token")

axios.defaults.baseURL = 'https://cavaverdot-production.up.railway.app'
axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
export default axios;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
