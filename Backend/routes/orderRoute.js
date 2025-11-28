const express = require("express");

const checkLogin = require('../midlewares/authMidleware')
const checkRole = require('../midlewares/checkRoleMidlware'); 
const {getOwnOrder,createOwnOrder,getOrderAdmin, updateOrders} = require("../controllers/orderController");

const router = express.Router();

router.get("/",checkLogin,checkRole(['user']), getOwnOrder)
router.get("/:id",checkLogin,checkRole(['admin']), getOrderAdmin)
router.put("/:id",checkLogin,checkRole(['admin']), updateOrders)
router.post("/",checkLogin,checkRole(['user']), createOwnOrder)

module.exports = router;