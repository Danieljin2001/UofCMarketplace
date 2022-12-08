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
import Logout from "./components/Logout";
import HomeAuth from "./Pages/HomeAuth";
import PostPage from './Pages/PostPage'
import Account from './Pages/Account'
import Chat from './Pages/Chat'
import ProductPage from './Pages/ProductPage'
import MyProductsPage from './Pages/MyProducts'
import UpdatePassword from './Pages/UpdatePassword'
import PrivateRoutes from './PrivateRoutes'

const App = () => {

    return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path='/chat' element={<Chat/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/post' element={<PostPage/>}/>
        </Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<HomeAuth/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/buy' element={<BuyPage/>}/>
        <Route path='/sell' element={<SellPage/>}/>
        <Route path='/productpage' element={<ProductPage/>}/>
        <Route path='/myproducts' element={<MyProductsPage/>}/>
        {/* <Route path='/account/update' element={<Chat/>}/> */}
        <Route />
      </Routes>
    </>
  );
};

export default App
