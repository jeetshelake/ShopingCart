import './App.css'
import React from 'react'
import Login from './Components/login/Login'
import DashBoard from './Components/pages/dashboard/DashBoard'
import { Navigate, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to = 'login'/>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/pages/*' element={<DashBoard></DashBoard>}></Route>
      </Routes>
    </>
  )
}
export default App
