const express=require("express")
const router=express.Router()
const {createUser}=require("../Controller/userController")
const{login}=require("../Controller/loginController")

router.post("/signup",createUser)
router.post("/login",login)
module.exports=router