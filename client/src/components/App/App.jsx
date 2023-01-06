import React from 'react'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import {Routes, Route} from 'react-router-dom'
import CarouselSlide from '../Carousel/Carousel'

function App() {
  return (
    <div>
      <Routes>
<<<<<<< HEAD
        <Route path='/footer' element={<Footer/>}/>
=======
        <Route path='/register' element={<Register/>}/>
        <Route path="/slide" element={<CarouselSlide/>}/>
>>>>>>> ec9bc331c2fb9d2f4c1c1c6a971f5b334382c456
      </Routes>
    </div>
  )
}

export default App