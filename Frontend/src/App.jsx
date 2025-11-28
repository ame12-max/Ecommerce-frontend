import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from "axios"
import Home from './Pages/Home';
import Orders from './Pages/Orders';
import Header from './components/header/Header';
import Cart from './Pages/Cart';
import Login from './Pages/Login';

function App() {
   const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:7001/api/products");

      setProducts(response.data);
    };
    fetchProducts();
  }, []);

   const [cart, setCart] = useState(0)
 const addToCart = () =>{
  setCart((pre) =>{
  return pre + 1;
  })
 }
  return (
    <>
    <Header cart={cart}/>
    <Routes>
       <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Home products={products} addToCart={addToCart}/>} />
      <Route path="/orders" element={<Orders/>} />
      <Route path="/cart" element={<Cart products={products} />} />
      <Route />
    </Routes>
    </>
  )
}

export default App;
