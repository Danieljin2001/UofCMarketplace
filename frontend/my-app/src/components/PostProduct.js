import Button from 'react-bootstrap/Button';
import React from 'react'

import "./PostProduct.css";
import { Route, Routes, useNavigate } from 'react-router-dom';
import PostPage from '../Pages/PostPage';

const PostProduct = () => {
  
return (
    <>
    {/* <div style={{display:'flex', justifyContent:'space-between', flexDirection: 'row-reverse'}}> */}
      <Button id="button" href = "/post" variant="warning" style={{color:'black'}}></Button>
      
      {/* <Button href = "/post" variant="warning" style={{marginRight:'10%', color:'black'}}>Post a Product</Button> */}
    {/* </div> */}
    </>
  );
}


export default PostProduct;