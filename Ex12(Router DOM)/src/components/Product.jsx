import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, name, price } = product;
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <div> Product Details</div>
      <h3>Name: {name}</h3>
      <h3>Price: {price}</h3>
      <button
        className="button"
        onClick={() => navigate("/product-details/" + id)}
      >
        {" "}
        Details
      </button>
    </div>
  );
}

export default Product;
