const{getUser,postUser, login} = require("../controller/userController")

const route = require("express").Router()

route.get("/",getUser)
route.post("/",postUser)
route.post("/login",login)
module.exports = route


