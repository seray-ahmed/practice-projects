import React from "react";
import "../css/Product.css";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, price, image, title, description } = product;
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="image-container">
        <img className="image" src={image} alt="" />
      </div>
      <div className="product-info">
        <p className="productTitle">{title}</p>
      </div>
      <div className="card-footer">
        <h3 className="price-tag">{price}€</h3>
        <button
          onClick={() => navigate("/product-details/" + id)}
          className="detail-button"
        >
          Details
        </button>
      </div>
    </div>
  );
}

export default Product;
