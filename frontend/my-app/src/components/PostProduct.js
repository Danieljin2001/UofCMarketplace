import Button from 'react-bootstrap/Button';
import React from 'react'

import { Route, Routes, useNavigate } from 'react-router-dom';
import PostPage from '../Pages/PostPage';

const PostProduct = () => {
  
return (
    <>
    <div style={{display:'flex', justifyContent:'space-between', flexDirection: 'row-reverse'}}>
      <Button href = "/post" variant="primary" style={{marginRight:'10%'}}>Post a Product</Button>
    </div>
    </>
  );
}


export default PostProduct;