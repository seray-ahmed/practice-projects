import { useEffect, useState } from "react";
import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateBasket,
  removeFromBasket,
  setDrawer,
} from "./redux/slices/basketSlice";

function App() {
  const { products, drawer } = useSelector((store) => store.basket);
  const totalAmount = products.reduce((sum, product) => {
    return sum + product.price * product.count;
  }, 0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateBasket());
  }, []);
  return (
    <div>
      <PageContainer>
        <Header />
        <Loading />
        <Drawer
          className="drawer"
          onClose={() => {
            dispatch(setDrawer());
          }}
          anchor="right"
          open={drawer}
        >
          <h2 className="drawer-title">Shopping Cart</h2>
          {products &&
            products.map((product) => {
              return (
                <div key={product.id} className="basket-item">
                  <img
                    src={product.image}
                    width={70}
                    height={70}
                    аlt={product.title}
                  />
                  <div className="basket-item-info">
                    <p className="basket-item-title">
                      {product.title}
                      <span className="basket-item-count">
                        x{product.count}
                      </span>
                    </p>
                    <p className="basket-item-price">{product.price}€</p>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => dispatch(removeFromBasket(product.id))}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          <div className="total-row">
            <span className="total-label">Total:</span>
            <span className="total-amount-value">
              {totalAmount.toFixed(2)}€
            </span>
          </div>{" "}
        </Drawer>

        <RouterConfig />
      </PageContainer>
    </div>
  );
}

export default App;
