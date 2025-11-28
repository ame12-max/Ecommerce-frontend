const pool = require("../config/db")
const {selectAllCategory,insertCategory} = require("../models/categoryQueries")

const getAllCategories = async (req,res) =>{
try {
const [rows] = await pool.query(selectAllCategory)
return res.json(rows)
} catch (error) {
    return res.status(500).json({
        messsage : 'sever error',
        error : error.messsage
    })
}
}
const createCategories = async (req,res) =>{
    const {name,description} = req.body;
    if (!name || !description) return res.json({message : "All fields required"})
        try {
const rows = await pool.query(insertCategory, [name,description])
return res.json(rows)
} catch (error) {
    return res.status(500).json({
        messsage : 'sever error',
        error : error.messsage
    })
}
}

module.exports = {getAllCategories,createCategories}