import React from 'react'
import Register from '../Register/Register'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App