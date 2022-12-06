import React from 'react'
import Product from '../components/Product'
import PostProduct from '../components/PostProduct'

function BuyPage() {
  return (
    <div id='background'>
      <div className='text-center'>BuyPage</div>
      <PostProduct></PostProduct>
      <Product></Product>
      <Product></Product>
      <Product></Product>
    </div>
  )
}

export default BuyPage