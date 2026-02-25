const mongoose=require("mongoose")

const data=mongoose.Schema({
    name:String,
    email:String,
    password:String
})

module.exports=mongoose.model("data1",data)//here the data1 is table name

