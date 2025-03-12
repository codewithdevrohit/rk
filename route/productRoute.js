const{getProduct,postProduct} = require("../controller/productController")
const auth = require("../midddleware/auth")
const route = require("express").Router()

route.get("/",getProduct)
route.post("/",auth,postProduct)


module.exports = route
