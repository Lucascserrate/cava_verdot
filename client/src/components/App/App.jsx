import React from 'react'
import Register from '../Register/Register'
import Cards from '../Cards/Cards'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </div>
  );
}

export default App