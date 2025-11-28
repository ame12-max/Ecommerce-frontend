const pool  = require("../config/db")
const {selectAllProduct,selectAOneProduct, insertProduct, updateProduct, deleteProduct} = require("../models/productQueries")

const getAllProducts = async (req,res) =>{
    try {
     const [rows]  = await pool.query(selectAllProduct)
     return res.status(200).json(rows)
    } catch (error) {
         return res.status(500).json({
        message: 'server error',
        error:error.message
       }) 
    }
}
const getOneProduct = async (req,res) =>{
    const userId = req.params.id;
    try {
        const [rows] = await pool.query(selectAOneProduct , [userId]);
         return res.status(200).json(rows)
    } catch (error) {
        return res.status(500).json({
        message: 'server error',
        error:error.message
       }) 
    }
}
const createProducts = async ( req,res) =>{
  const {name,description,price,stock,catagory_id} = req.body;
  
  if (!name || !description || !price || !stock || !catagory_id) return res.json({message : "All fields are required"})

    try {
        const [rows] = await pool.query(insertProduct, [name,description,price,stock,catagory_id])
      return res.status(200).json(rows)

    } catch (error) {
         return res.status(500).json({
        message: 'server error',
        error:error.message
       }) 
    }

}
const updateProducts = async ( req,res) =>{
  const {name,description,price,stock} = req.body;
  
  if (!name || !description || !price || !stock ) return res.json({message : "All fields are required"})

    try {
        const productId = req.params.id;
        const [rows] = await pool.query(updateProduct, [name,description,price,stock,productId])
      return res.status(200).json(rows)

    } catch (error) {
         return res.status(500).json({
        message: 'server error',
        error:error.message
       }) 
    }

}
const deleteProducts = async ( req,res) =>{

    try {
        const productId = req.params.id;
        const [rows] = await pool.query(deleteProduct, [productId])
      return res.status(200).json(rows)

    } catch (error) {
         return res.status(500).json({
        message: 'server error',
        error:error.message
       }) 
    }

}
module.exports = {getAllProducts,getOneProduct,createProducts,updateProducts,deleteProducts};