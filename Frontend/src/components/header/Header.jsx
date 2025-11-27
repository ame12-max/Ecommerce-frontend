import React from "react";
import { ShoppingCart, Package, Search } from "lucide-react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="left-header">
        <Link to="/">
          {" "}
          <img src="/download.jfif" alt="" />
        </Link>
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
        <p className="order-count">3</p>
      </div>
    </div>
  );
}

export default Header;
