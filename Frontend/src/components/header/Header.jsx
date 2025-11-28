import React from "react";
import { ShoppingCart, Package, Search } from "lucide-react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({cart}) {
  return (
    <div className="header">
      <div className="left-header">
        <Link to="/">
          {" "}
          <img src="/download.jfif" alt="" />
        </Link>
        <div className="hover-container">
          <Link className="category">Categories</Link>
          <div className="hovered-category">
            <li>Technology</li>
            <li>Food</li>
            <li>asseseries</li>
          </div>
        </div>
        <Link className="saved">Saved</Link>
      </div>
      <div className="right-header">
        <div className="search">
          <input placeholder="Search ..." type="text" />
          <Search className="search-icon" size={26} />
        </div>
        <Link to="/orders">
          <Package size={26} />
        </Link>
        <Link to="/cart">
          <ShoppingCart className="cart-icon" size={26} />
        </Link>
        <p className="order-count">{cart}</p>
      </div>
    </div>
  );
}

export default Header;
