const express=require("express")
const router=express.Router()
const {createUser}=require("../Controller/userController")
const{login}=require("../Controller/loginController")
const{profileAdd}=require("../Controller/profileController")
const protect=require("../Middleware/profileMiddleware")

router.post("/signup",createUser)
router.post("/login",login)
router.get("/profile",protect,profileAdd)
module.exports=router