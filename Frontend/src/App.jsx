import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Orders from './Pages/Orders';
import Header from './components/header/Header';
import Cart from './Pages/Cart';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/orders" element={<Orders/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route />
    </Routes>
    </>
  )
}

export default App;
