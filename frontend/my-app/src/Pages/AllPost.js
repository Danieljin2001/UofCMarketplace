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
      <h1 style={{ textAlign: "center", fontSize: "3rem" }}>All Posts</h1>
      <div>
        {posts?.length > 0 ? (
          posts.map((post) => <AdminPosts key={post._id} props={post} />)
        ) : (
          <h2 className="text-center">No Posts Available</h2>
        )}
      </div>
    </>
  );
}

export default AllPost;
