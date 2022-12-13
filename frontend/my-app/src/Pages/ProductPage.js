import React from "react";
import { useLocation } from "react-router";
import ProductDetails from "../components/ProductDetails";

function ProductPage() {
  const location = useLocation();
  const { state } = location;
  return (
    <div>
      <ProductDetails props={state.props}></ProductDetails>
    </div>
  );
}

export default ProductPage;
