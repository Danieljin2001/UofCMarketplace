import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import PostProduct from "../components/PostProduct";
import NavBar from "../components/NavBar";
import { getAllPosts } from "../api";

function BuyPage() {
  const [posts, setPosts] = useState(null);
  async function getData() {
    const result = await getAllPosts();
    console.log("result== ", result);
    setPosts(result.buy);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <NavBar />
      <div id="background">
        <PostProduct></PostProduct>
        {posts?.map((post) => (
          <Product key={post._id} props={post} />
        ))}
      </div>
    </>
  );
}

export default BuyPage;
