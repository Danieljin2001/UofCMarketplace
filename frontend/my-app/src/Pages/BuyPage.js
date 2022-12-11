import React, { useEffect, useRef, useState } from "react";
import Product from "../components/Product";
import PostProduct from "../components/PostProduct";
import NavBar from "../components/NavBar";
import { getAllPosts } from "../api";
import Button from "react-bootstrap/Button";

const categories = ["All", "Electronics", "Furniture", "Textbook", "Clothing"];
function BuyPage() {
  const allPosts = useRef(null);
  const [posts, setPosts] = useState(null);
  const [category, setCategory] = useState(categories[0]);

  async function getData() {
    const result = await getAllPosts();
    console.log("result== ", result);
    setPosts(result.buy);
    allPosts.current = result.buy;
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
        <div className="text-center">Buy</div>
        <PostProduct></PostProduct>
        <form
          style={{ width: "30%" }}
          className="d-flex justify-content-center"
        >
          <div className="flex-row ">
            <div>
              <h5>Filter By Category</h5>
              <select
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
            </div>
            <Button onClick={handleSubmit} className="mt-2">
              Filter
            </Button>
          </div>
        </form>
        {posts?.map((post) => (
          <Product key={post._id} props={post} />
        ))}
      </div>
    </>
  );
}

export default BuyPage;
