import React, { useEffect, useRef, useState } from "react";
import Product from "../components/Product";
import PostProduct from "../components/PostProduct";
import NavBar from "../components/NavBar";
import { getAllPosts } from "../api";
import Button from "react-bootstrap/Button";
import "./SellPage.css";

const categories = ["All", "Electronics", "Furniture", "Textbook", "Clothing"];
function SellPage() {
  const allPosts = useRef(null);
  const [posts, setPosts] = useState(null);
  // const category = useRef(categories[0]);
  const [category, setCategory] = useState(categories[0]);
  async function getData() {
    const result = await getAllPosts();
    setPosts(result.sell);
    allPosts.current = result.sell;
  }
  useEffect(() => {
    getData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("cat= ", category);
    if (category.toUpperCase() === "ALL") {
      setPosts(allPosts.current);
    } else {
      let cat = allPosts.current.filter(
        (post) => post.productType.toUpperCase() === category.toUpperCase()
      );
      console.log("filtered= ", cat);
      setPosts(cat);
    }
  }

  return (
    <>
      <NavBar />
      <div id="background">
        <h1 className="text-center" style={{fontSize:"5rem", margin:"0"}}>Sell</h1>
        <div className="d-flex justify-content-center">
        <form
          id="form-sellpage"
        >
          <div className="flex-row ">
            <div>
              <h6>Filter By Category</h6>
              <div className="d-flex flex-row">
                <select
                  style={{ width: "9rem" }}
                  className="form-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
                <div
                  style={{ width: "100%" }} 
                  className="d-flex justify-content-between"
                >
                  <Button onClick={handleSubmit} className="mx-2" variant="light">
                    Filter
                  </Button>
                  <PostProduct></PostProduct>
                </div>
              </div>
            </div>
          </div>
        </form>
        </div>
        {posts?.map((post) => (
          <Product key={post._id} props={post} />
        ))}
      </div>
    </>
  );
}

export default SellPage;
