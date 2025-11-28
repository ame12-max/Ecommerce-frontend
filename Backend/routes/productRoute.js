const express = require('express')

const checkLogin = require("../midlewares/authMidleware")
const checkRole = require("../midlewares/checkRoleMidlware")
const {getAllProducts,getOneProduct, createProducts, updateProducts, deleteProducts} = require("../controllers/productController")
const router  = express.Router()

router.get("/", getAllProducts)//i removed checkLogin middleware to work with react to fetch
router.get("/:id", checkLogin, getOneProduct);
router.post("/", checkLogin, checkRole(["admin"]),createProducts)
router.put("/:id", checkLogin, checkRole(["admin"]),updateProducts)
router.delete("/:id", checkLogin, checkRole(["admin"]),deleteProducts)


module.exports = router