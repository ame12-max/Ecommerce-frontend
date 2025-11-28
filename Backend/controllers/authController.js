const bcrypt = require("bcryptjs");
const jwt = require ("jsonwebtoken")
const dotenv = require("dotenv");
dotenv.config() 

const pool  = require("../config/db");
const {userRegister, selectEmail, userLogin} = require("../models/userQuiry");

const registerController = async (req,res) => {
  const {name,email, password, role} = req.body;
  if(!name || !email || !password || !role) return res.status(400).json({message : "All fields required"});

  const hashedPassword = await bcrypt.hash(password, 10)
try {
    const checkEmail = await pool.query(selectEmail,[email])
    console.log(checkEmail)
   
    //if(checkEmail[0][0].email === email) return res.json({message : "user already registerd"})
 const [rows] = await pool.query(userRegister, [name,email,hashedPassword,role]);
      
   return res.json(rows)

} catch (error) {
    return res.json({
        message : 'server error',
        error : error.message
    })
}

}

const loginController = async (req,res) => {
  const {email,password} = req.body;
  if( !email || !password ) return res.status(400).json({message : "All fields required"});

try {
   const [rows] = await pool.query(userLogin, [email]);
   const user = rows[0];
   console.log(rows)
   const isMatch = await bcrypt.compare(password, user.password );
   if(!isMatch) return res.status(400).json({message : "invalid password"})

    const token = jwt.sign({email : user.email,role :user.role,id : user.id}, process.env.JWT_SECRET , {expiresIn : "1 h"})


   return res.json({message : "user loged succes",token,user})

} catch (error) {
    return res.json({
        message : 'server error',
        error : error.message
    })
}

}

module.exports = {registerController, loginController}