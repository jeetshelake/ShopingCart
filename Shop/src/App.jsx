import './App.css'
import React from 'react'
import Login from './login/Login'
import DashBoard from './pages/DashBoard'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login></Login>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/pages' element={<DashBoard></DashBoard>}></Route>
      </Routes>
    </>
  )
}
export default App
