import React, { useEffect, useRef, useState } from "react";
import Product from "../components/Product";
import PostProduct from "../components/PostProduct";
import NavBar from "../components/NavBar";
import { getAllPosts } from "../api";

function SellPage() {
  const [posts, setPosts] = useState(null);
  async function getData() {
    const result = await getAllPosts();
    console.log("result== ", result);
    setPosts(result.sell);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavBar />
      <div id="background">
        <div className="text-center">Sell</div>
        <PostProduct></PostProduct>
        {posts?.map((post) => (
          <Product key={post._id} props={post} />
        ))}
      </div>
    </>
  );
}

export default SellPage;
