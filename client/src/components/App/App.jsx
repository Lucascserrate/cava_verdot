import React from 'react'
import './App.css'
import Register from '../Register/Register'
import { Routes, Route, Router } from 'react-router-dom'
import Home from '../Home/Home'
import Store from '../Store/Store'
import Details from '../Details/Details'
import PostProductForm from '../FormularioPostProduct/PostProductForm'
import About from '../About/About'
import Login from '../Login/Login'
import PasarelaStripe from '../Pasarela/PasarelaStripe'
import FinalRegister from '../FinalRegister/FinalRegister'
import Cart from '../Cart/Cart'
import Registro from '../RegistroConTerceros/registro'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/test' element={<Registro/>}></Route>
        <Route path='/pasarela' element={<PasarelaStripe/>}/>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/store/:id' element={<Details />} />
        <Route path='/register' element={<Register />} />
        <Route path='/postproduct' element={<PostProductForm />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/finalregister' element={<FinalRegister />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App