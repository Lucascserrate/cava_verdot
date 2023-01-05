import React from 'react'
import Register from '../Register/Register'
import {Routes, Route} from 'react-router-dom'
import CarouselSlide from '../Carousel/Carousel'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path="/slide" element={<CarouselSlide/>}/>
      </Routes>
    </div>
  )
}

export default App