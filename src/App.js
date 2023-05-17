import React from 'react'
import "./App.css"
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './component/home/Home'
import AboutUs from './component/aboutus/AboutUs';
import Login from './component/login/Login'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/> }/>
        <Route path='/AboutUs' element = {<AboutUs />}/>
        <Route path='/Login' element = {<Login />}/>
      </Routes>
    </div>
  )
}

export default App;