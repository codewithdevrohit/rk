const {getProduct,postProduct} = require("../controller/productContoller")

const route = require("express").Router()
route.get("/",getProduct)
route.post("/",postProduct)

module.exports = route