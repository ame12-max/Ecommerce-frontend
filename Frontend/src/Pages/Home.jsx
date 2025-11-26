import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:7001/api/products");

      setProducts(response.data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <div className="product-container">
            <div className="product">
              <img src={product.image} alt="product image" srcset="" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button>Add To cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
