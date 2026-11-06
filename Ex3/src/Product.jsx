import React from "react";

function Product({ productName, price }) {
  return (
    <div>
      <div>Product Description</div>
      <div>
        <div> Name: {productName}</div>
        <div>Price: {price}</div>
      </div>
    </div>
  );
}

export default Product;
