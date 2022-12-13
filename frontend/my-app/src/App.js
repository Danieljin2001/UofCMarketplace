import React, { Component, useEffect } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SellPage from "./Pages/SellPage";
import BuyPage from "./Pages/BuyPage";
import PostPage from "./Pages/PostPage";
import Account from "./Pages/Account";
import Chat from "./Pages/Chat";
import ProductPage from "./Pages/ProductPage";
import MyProductsPage from "./Pages/MyProducts";
import UpdatePassword from "./Pages/UpdatePassword";
import {
  AuthenticatedRoute,
  getDecodedToken,
  getToken,
  isAuth,
} from "./routeProtection";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import AdminLogin from "./Pages/AdminLogin";
import AdminRoute from "./AdminRoute";
import AllPost from "./Pages/AllPost";
import AllStudent from "./Pages/AllStudent";
import UpdatePost from "./Pages/UpdatePost";

const App = () => {
  return (
    <>
      {/* <NavBar></NavBar> */}
      <Routes>
        {/* public routes, wrap it under publicroute component */}
        {/* <Route path="" element={<PublicRoute />}> */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/productpage" element={<ProductPage />} />

        {/* </Route> */}

        {/* private routes, just checks if logged in */}
        <Route path="" element={<ProtectedRoute />}>
          <Route path="/account" element={<Account />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/myproducts" element={<MyProductsPage />} />
          <Route path="/updatepass" element={<UpdatePassword />} />
          <Route path="/updatepost" element={<UpdatePost />} />
        </Route>

        {/* routes only for admin */}
        <Route path="" element={<AdminRoute />}>
          <Route path="/students" element={<AllStudent />} />
          <Route path="/posts" element={<AllPost />} />
        </Route>

        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/home" element={<HomeAuth />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}

        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/logout" element={<Logout />} /> */}
        {/* <Route path="/buy" element={<BuyPage />} /> */}
        {/* <Route path="/sell" element={<SellPage />} /> */}

        {/* <Route path='/account/update' element={<Chat/>}/> */}
        <Route />
      </Routes>
    </>
  );
};

export default App;
