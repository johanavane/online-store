import React from "react";
import "../styles/Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="flex-box">
        <div className="storeName">
          <a href="/">JAMZ</a>
          <FaStore />
        </div>
        <div className="categories">
          <a href="/Womens">Women's</a>
          <a href="/Mens">Men's</a>
          <a href="/Jewelery">Jewelery</a>
        </div>
        <div className="cart">
          <span>
            <a className="user">
              <FaUserAlt />
            </a>
            <a>
              <FaShoppingCart />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
