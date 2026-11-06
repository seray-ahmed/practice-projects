import React, { useState } from "react";
import "../css/Header.css";
import { FaBasketShopping } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { BsMoon } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";
import { setSearchItem } from "../redux/slices/productSlice";

export default function Header() {
  const [theme, setTheme] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.basket);
  const searchItem = useSelector((store) => store.product.searchItem);
  const handleSearchChange = (e) => {
    dispatch(setSearchItem(e.target.value));
  };

  const changeTheme = () => {
    const root = document.getElementById("root");
    if (theme) {
      root.style.backgroundColor = "#1a1a1a";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "black";
    }
    setTheme(!theme);
  };

  return (
    <div className="header-container">
      <div
        className="flex-row"
        onClick={() => {
          navigate("/");
        }}
      >
        <img className="logo" src="/src/images/logo.png" />
        <p className="logo-text">Lumina Memories</p>
      </div>
      <div className="flex-row">
        <div className="search-container">
          <input className="search-input " type="text" placeholder="Search" />
        </div>

        <div className="icons-group">
          {theme ? (
            <BsMoon className="header-icon" onClick={changeTheme} />
          ) : (
            <CiLight className="header-icon" onClick={changeTheme} />
          )}
          <Badge
            onClick={() => dispatch(setDrawer())}
            badgeContent={products.length}
            color="primary"
          >
            <FaBasketShopping className="basket-icon" />
          </Badge>
        </div>
      </div>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchItem}
          onChange={handleSearchChange}
        />
      </div>
      <div
        onClick={() => {
          dispatch(setSearchItem(""));
          navigate("/");
        }}
      ></div>
    </div>
  );
}
