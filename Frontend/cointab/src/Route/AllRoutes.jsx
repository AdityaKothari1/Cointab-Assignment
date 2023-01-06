import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import User from '../Components/User'

export const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/user' element={<User/>} />
   </Routes>
  )
}
