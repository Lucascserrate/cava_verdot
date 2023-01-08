import React from 'react'
import Register from '../Register/Register'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Store from '../Store/Store'
import Details from '../Details/Details'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function App() {
  return (
    <div>
      <NavBar searchbar='true'/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/store/:id' element={<Details />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App