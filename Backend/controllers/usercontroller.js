const pool = require("../config/db")
const { selectAllUsers, selectOneUser, updateOneUser, deleteUser } = require("../models/userQuiry")
const getAllUsers = async (req,res) =>{
    try {
      [rows] = await pool.query(selectAllUsers)
      res.status(200).json(rows)
    } catch (error) {
       return res.status(500).json({
        message: 'server error',
        error:error.message
       }) 
    }
}
const getOneUser = async (req,res) =>{
 const userId = req.params.id;
 try {
  const [rows] = await pool.query(selectOneUser, [userId]);
  return  res.status(200).json(rows)
 } catch (error) {
   return res.status(500).json({
        message: 'server error',
        error:error.message
       }) 
 }
}
const getOwnDetail = async (req,res) =>{
  const userId = req.user.id;
 try {
  const [rows] = await pool.query(selectOneUser, [userId]);
  return  res.status(200).json(rows)
 } catch (error) {
   return res.status(500).json({
        message: 'server error',
        error:error.message
       }) 
 }
}
const updateOwnDetail = async (req,res) =>{
  const {name,email} = req.body;
  if(!name || !email) return res.status(400).json({message : "All fields required"})
  const userId = req.user.id;

  try {
    const [rows] = await pool.query(updateOneUser,[ name,email, userId])
      return  res.status(200).json(rows)
  } catch (error) {
    return res.status(500).json({
        message: 'server error',
        error:error.message
       }) 
  }
}
const updateUserDetailAdmin = async (req,res) =>{
  const {name,email} = req.body;
  if(!name || !email) return res.status(400).json({message : "All fields required"})
  const userId = req.params.id;

  try {
    const [rows] = await pool.query(updateOneUser,[ name,email, userId])
      return  res.status(200).json(rows)
  } catch (error) {
    return res.status(500).json({
        message: 'server error',
        error:error.message
       }) 
  }
}
const deleteUserAdmin = async (req,res) =>{
  const userId = req.params.id;
  try {
    const [rows] = await pool.query(deleteUser,[  userId])
      return  res.status(200).json(rows)
  } catch (error) {
    return res.status(500).json({
        message: 'server error',
        error:error.message
       }) 
  }

}

module.exports = {getAllUsers,getOneUser,getOwnDetail,updateOwnDetail,updateUserDetailAdmin,deleteUserAdmin};