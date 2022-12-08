import Button from 'react-bootstrap/Button';
import React from 'react'

import { Route, Routes, useNavigate } from 'react-router-dom';
import PostPage from '../Pages/PostPage';

const PostProduct = () => {

function PostProduct() {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/post")
  };
}
  
return (
    <>
    <div style={{display:'flex', justifyContent:'space-between', flexDirection: 'row-reverse'}}>
      <Button onClick={routeChange} variant="primary" style={{marginRight:'10%'}}>Post a Product</Button>
      <Routes>
        <Route path="/post" element={<PostPage/>}/>
      </Routes>
    </div>
    </>
  );
}


export default PostProduct;