import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dark from './components/Dark'
import Light from './components/Light'
export default function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Dark />}></Route>
        <Route path='/light' element={<Light />}></Route>
      </Routes>
    </div>
  )
}
