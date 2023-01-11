import React from 'react'
import Register from '../Register/Register'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Store from '../Store/Store'
import Details from '../Details/Details'
import FORMIKPostProductForm from '../FormularioPostProduct/FORMIKPostProductForm'
import About from '../About/About'
import Login from '../Login/Login'
import FinalRegister from '../FinalRegister/FinalRegister'
import Cart from '../Cart/Cart'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/store/:id' element={<Details />} />
        <Route path='/register' element={<Register />} />
        <Route path='/postproduct' element={<FORMIKPostProductForm />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/finalregister' element={<FinalRegister />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App