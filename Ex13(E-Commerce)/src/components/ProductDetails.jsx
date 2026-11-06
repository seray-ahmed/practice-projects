import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/productSlice";
import "../css/ProductDetails.css";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasket } from "../redux/slices/basketSlice";

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const { price, image, title, description } = selectedProduct;
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const getProductByID = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      return;
    }
  };

  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      count,
    };
    dispatch(addToBasket(payload));
    dispatch(calculateBasket());
  };

  useEffect(() => {
    getProductByID();
  }, []);

  return (
    <div className="product-details-container">
      {/* <div className="product-image-wrapper"> */}
      <div>
        <img src={image} width={300} height={500} alt="" />
      </div>
      <div className="product-info-wrapper">
        <h1 className="product-title">{title}</h1>
        <p className="product-description">{description}</p>
        <h1 className="product-price">{price}€</h1>
        <div className="quantity-container">
          <div className="quantity-controls">
            <CiCirclePlus onClick={increment} className="quantity-btn">
              +
            </CiCirclePlus>
            <span className="quantity-amount">{count}</span>
            <CiCircleMinus onClick={decrement} className="quantity-btn">
              -
            </CiCircleMinus>
          </div>
        </div>
        <div>
          <button onClick={addBasket} className="add-to-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
