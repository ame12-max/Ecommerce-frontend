const express = require('express');
const cors = require('cors')
require("dotenv").config()
const app = express();

const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute")
const productRoute = require("./routes/productRoute")
const categoryRoute = require("./routes/categoryRoute")
const orderRoute = require("./routes/orderRoute")



// midlewares will implement here
app.use(express.json())
app.use(cors())

// routes will mount here
app.use("/api", authRoute)
app.use ("/api/users",userRoute)
app.use("/api/products", productRoute)
app.use("/api/categories", categoryRoute)
app.use("/api/orders", orderRoute)


// server started here
const PORT = process.env.PORT || 7000;
app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})