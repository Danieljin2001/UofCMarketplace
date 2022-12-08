import React from "react";
import MyProducts from "../components/MyProducts";
import NavBar from "../components/NavBar";

function MyProductsPage() {
  return (
    <>
      <NavBar />
      <div style={{ marginTop: "7%" }}>
        <MyProducts></MyProducts>
        <MyProducts></MyProducts>
        <MyProducts></MyProducts>
      </div>
    </>
  );
}

export default MyProductsPage;
