const mongoose = require("mongoose")
const express = require("express")
const userRoute = require("./route/userRoute")
const productRoute = require("./route/productRoute")

require("dotenv/config")


const app = express()

app.use(express.json())

app.get("/", (req,res)=>{
    res.send("home")
})

app.use("/api/user",userRoute)
app.use("/api/product",productRoute)

app.listen(process.env.PORT)

async function db() {
   try {
    const data = await mongoose.connect(process.env.DB)
    console.log(data.default.STATES.connected);
    
   } catch (error) {
    console.log(error.message);
    
   } 
}

db()