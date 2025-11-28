import React, { useEffect, useState } from 'react'
import './Order.css'
import api from '../context/api'
import { Link } from 'react-router-dom'

function Orders() {
  const [orders, setOrders] = useState([])

  useEffect(() =>{
     const fetchOrders = async () =>{
      const response = await api.get("/orders")

     setOrders(response.data);
     console.log("your order",response)
     }
    

     fetchOrders();
  }, [])
  return (
    <div className='order-container'>
      {orders?.map((order) =>{
        return <div className="orders">
        <p> {order.id}</p>  
        </div>
      })}
        {orders.length == 0 && 
        <div className='no-order'>
        <h3> your order will appear here
        </h3>
        <p>Add products to your Cart </p>
        <Link className='go-to-products' to='/'>Go to Products</Link>
        </div>
        }
        
    </div>
  )
}

export default Orders