import React from 'react'
import Register from '../Register/Register'
import Cards from '../Cards/Cards'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Details from '../Details/Details'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </div>
  )
}

export default App