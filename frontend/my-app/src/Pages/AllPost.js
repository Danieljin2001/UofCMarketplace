import { useEffect, useState } from "react";
import { getAllAdminPosts } from "../api";
import AdminPosts from "../components/AdminPosts";
import NavBar from "../components/NavBar";

function AllPost() {
  const [posts, setPosts] = useState(null);
  async function getData() {
    const result = await getAllAdminPosts();
    console.log("result== ", result);
    setPosts(result);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <NavBar />
      <h1 style={{ textAlign: "center", fontSize:"5rem" }}>All Posts</h1>
      <div style={{ margin: "15px" }}>
        {posts?.map((post) => (
          <AdminPosts key={post._id} props={post} />
        ))}
      </div>
    </>
  );
}

export default AllPost;
