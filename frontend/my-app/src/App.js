import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Login  from './Pages/Login'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import SellPage from './Pages/SellPage'
import BuyPage from './Pages/BuyPage'
import PostPage from './Pages/PostPage'

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/buy' element={<BuyPage/>}/>
        <Route path='/sell' element={<SellPage/>}/>
        <Route path='/post' element={<PostPage/>}/>
        <Route />
      </Routes>
    </>
  )
}

export default App