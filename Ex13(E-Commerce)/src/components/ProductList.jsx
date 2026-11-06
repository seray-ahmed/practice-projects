import React from "react";
import "../css/ProductList.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";
import Product from "./Product";

function ProductList() {
  const dispatch = useDispatch();
  const { products, searchItem } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchItem.toLowerCase()),
  );
  return (
    <div className="products-grid">
      {products &&
        filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}

export default ProductList;
