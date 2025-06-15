import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Memasak from './Memasak'
import Populeritas from './Populeritas'
import Olahan from './pages/Olahan'

const App = () => {
  return (
    <Routes>
       <Route path="/" element={<Homepage />} />
       <Route path="/memasak" element={<Memasak />} />
       <Route path="/populeritas" element={<Populeritas />} />
       <Route path="/olahan" element={<Olahan />} />
    </Routes>
  )
}

export default App