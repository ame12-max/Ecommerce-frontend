import React from "react";
import { ShoppingCart, Package, Search } from "lucide-react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="left-header">
        <img src="/download.jfif" alt="" srcset="" />
      </div>
      <div className="right-header">
        <div className="search">
          <input placeholder="Search ..." type="text" />
          <Search className="search-icon" size={26} />
        </div>
        <Package size={26} />
        <ShoppingCart className="cart-icon" size={26} />
      </div>
    </div>
  );
}

export default Header;
