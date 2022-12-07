import Button from 'react-bootstrap/Button';
import React from 'react'

const PostProduct = () => {

  return (
    <>
    <div style={{display:'flex', justifyContent:'space-between', flexDirection: 'row-reverse'}}>
      <Button variant="primary" style={{marginRight:'10%'}}>Post a Product</Button>
    </div>
    </>
  );
}

export default PostProduct;