const  pool  = require("../config/db");
const {selectOrder,insertOrder, selectOrderById, updateOrder} = require("../models/orderQueries");

const getOwnOrder = async (req,res) =>{
    const userId = req.user.id;

    try {
        const [rows] = await pool.query(selectOrder , [userId])
        return res.json(rows)
    } catch (error) {
        return res.status(500).json({
        message: 'server error',
        error:error.message
       }) 
    }
}
const createOwnOrder = async (req,res) =>{
    const userId = req.user.id;
    const {total_price} = req.body;
  if (!total_price) return res.json({message : "All fields required"})
    try {
        const [rows] = await pool.query(insertOrder , [userId,total_price])
        return res.json(rows)
    } catch (error) {
        return res.status(500).json({
        message: 'server error',
        error:error.message
       }) 
    }
}
const getOrderAdmin = async (req,res) =>{
    const userId = req.params.id;

    try {
        const [rows] = await pool.query(selectOrderById , [userId])
        return res.json(rows)
    } catch (error) {
        return res.status(500).json({
        message: 'server error',
        error:error.message
       }) 
    }
}
const updateOrders = async (req,res) =>{
    const {status} = req.body;
    const orderId = req.params.id;
  if (!status) return res.json({message : "All fields required"})
    try {
        const [rows] = await pool.query(updateOrder , [status,orderId])
        return res.json(rows)
    } catch (error) {
        return res.status(500).json({
        message: 'server error',
        error:error.message
       }) 
    }
}
module.exports ={getOwnOrder,createOwnOrder,getOrderAdmin,updateOrders};