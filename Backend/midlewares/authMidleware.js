const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");
dotenv.config()

const checkLogin = (req,res,next) =>{
  const authHeader = req.header('Authorization')
    try {
        if(!authHeader) return res.json({message : 'user not authenticated'})

    const token = authHeader.split(' ')[1];

  const decode = jwt.verify(token , process.env.JWT_SECRET);

   req.user = decode;

  next()
    } catch (error) {
        return res.json({
        message : 'server error',
        error : error.message
    }) 
    }
}

module.exports = checkLogin