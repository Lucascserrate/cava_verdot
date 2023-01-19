import React from 'react'
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
import Registro from '../RegistroConTerceros/registro'
import Dashboard from '../Admin/Dashboard/Dashboard'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/test' element={<Registro />} />
        <Route path='/' element={<Home />} />
        <Route path='/pasarela' element={<PasarelaStripe />} />
        <Route path='/store' element={<Store />} />
        <Route path='/store/:id' element={<Details />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/admin' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App