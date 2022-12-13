import React, { useEffect, useState } from "react";
import { getStudentPosts } from "../api";
import MyProducts from "../components/MyProducts";
import NavBar from "../components/NavBar";

function MyProductsPage() {
  const [posts, setPosts] = useState(null);
  async function getData() {
    const result = await getStudentPosts();
    console.log("result== ", result);
    setPosts(result);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <NavBar />
      <h1 className="text-center" style={{fontSize:"5rem", margin:"0"}}>My Posts</h1>
      <div style={{ margin: "15px" }}>
        {posts?.map((post) => (
          <MyProducts key={post._id} props={post} />
        ))}
      </div>
    </>
  );
}

export default MyProductsPage;
