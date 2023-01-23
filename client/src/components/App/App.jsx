import React, {useEffect} from 'react'
import './App.css'
import Register from '../Register/Register'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Store from '../Store/Store'
import Details from '../Details/Details'
import About from '../About/About'
import Login from '../Login/Login'
import PasarelaStripe from '../Pasarela/PasarelaStripe'
import Cart from '../Cart/Cart'
import Dashboard from '../Admin/Dashboard/Dashboard'
import DashboardClient from '../DashboardClient/DashboardClient'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../../redux/actions'
import { parseJwt } from '../../functions/parseTokenJwt'

function App() {

  const stateUser = useSelector(state => state.user);
  const dispatch = useDispatch();

  let token = window.localStorage.getItem("token");
  
  useEffect(()=>{
    if(!!stateUser && !!token){
      console.log((!!stateUser && !!token));
      let decript = parseJwt(token);
      dispatch(setUser(decript));
    }
  },[dispatch]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pasarela' element={<PasarelaStripe />} />
        <Route path='/store' element={<Store />} />
        <Route path='/store/:id' element={<Details />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/dashboard' element={<DashboardClient />} />
      </Routes>
    </div>
  );
}

export default App