const express = require("express");

const checkLogin = require('../midlewares/authMidleware')
const checkRole = require('../midlewares/checkRoleMidlware') 
const {getAllCategories, createCategories} = require("../controllers/categoryController");

const router = express.Router();

router.get("/", getAllCategories) // i removed checkLogin midllware tofetch from frontend
router.post("/", checkLogin ,checkRole(["admin"]),createCategories)

module.exports = router;