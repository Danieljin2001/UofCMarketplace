import React from 'react'
import Product from '../components/Product'
import PostProduct from '../components/PostProduct'

function SellPage() {
  return (
  <div id='background'>
    <div className='text-center'>Sell Page</div>
    <PostProduct></PostProduct>
    <Product></Product>
    <Product></Product>
    <Product></Product>
  </div>
  )
}

export default SellPage