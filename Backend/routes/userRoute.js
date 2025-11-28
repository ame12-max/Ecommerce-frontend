const express = require("express");
const {getAllUsers,getOneUser, getOwnDetail, updateOwnDetail, updateUserDetailAdmin, deleteUserAdmin} = require("../controllers/usercontroller");
const checkLogin = require("../midlewares/authMidleware");
const checkRole = require("../midlewares/checkRoleMidlware");

const router = express.Router();

router.get('/',checkLogin,checkRole(['admin']),getAllUsers)
router.get('/me',checkLogin,getOwnDetail)
router.put('/me',checkLogin,updateOwnDetail)
router.get('/:id',checkLogin,checkRole(['admin']),getOneUser)
router.put('/:id',checkLogin,checkRole(['admin']),updateUserDetailAdmin)
router.delete('/:id',checkLogin,checkRole(['admin']),deleteUserAdmin)

module.exports = router