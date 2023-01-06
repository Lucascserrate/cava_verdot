import React from 'react'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </div>
  )
}

export default App