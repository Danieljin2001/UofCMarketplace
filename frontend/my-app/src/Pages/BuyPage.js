import React from 'react'
import Product from '../components/Product'
import PostProduct from '../components/PostProduct'
import NavBar from "../components/NavBar";

function BuyPage()
{
  return (
    <>
        <NavBar />
        <div id='background'>
          <div className='text-center'>BuyPage</div>
          <PostProduct></PostProduct>
          <Buying></Buying>
          <Buying></Buying>
          <Buying></Buying>
        </div>
        
      <div id='background'>
        <div className='text-center'>BuyPage</div>
        <PostProduct></PostProduct>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    </>
  )
}

export default BuyPage