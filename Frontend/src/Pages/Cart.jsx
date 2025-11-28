import React from "react";
import './Cart.css'

function Cart({products}) {
  return (
    <div className="cart-conatainer">
      {products.map( (product) =>{
       return <div className="cart-product">
        <img src={product.image}/>  
        <h3>{product.name}</h3>  
        <p>{product.description}</p>  
      </div>
      })}
      
    </div>
  );
}

export default Cart;
