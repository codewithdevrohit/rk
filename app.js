const mongoose = require("mongoose")
const express = require("express")
require("dotenv/config")
const productRoute = require("./model/product")

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    
    res.send("home")
})

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
