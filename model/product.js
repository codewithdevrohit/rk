const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    url:{
        type:String,
    }
})

module.exports = mongoose.model("produt",productSchema)