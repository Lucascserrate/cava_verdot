import React from 'react'
import Register from '../Register/Register'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Store from '../Store/Store'
import Details from '../Details/Details'
import FORMIKPostProductForm from '../FormularioPostProduct/FORMIKPostProductForm'
import Login from '../Login/Login'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/store/:id' element={<Details />} />
        <Route path='/register' element={<Register />} />
        <Route path='/postproduct' element={<FORMIKPostProductForm />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App