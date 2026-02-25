const data= require("../Model/data")
const bcrypt = require("bcryptjs");


//now we are creating data
const createUser=async(req,res)=>{
    try{

        const{name,email,password}=req.body//req.body stores data from frontend

        const hashedPassword= await bcrypt.hash(password,10)

        

        const user=await data.create({ //it will create a table using "data" variable
            name,
            email:email.toLowerCase(),
            password:hashedPassword
        })

        res.status(201).json({
            message:"account created",
            user
        })



    }
    catch(err){

        res.status(500).json({
            message:err.message
        })

    }
}

module.exports={createUser}