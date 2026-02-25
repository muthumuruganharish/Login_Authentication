const mongoose= require("mongoose")

const studentsSchema=new mongoose.Schema({
   

    name:String,
    age:Number
})

module.exports=mongoose.model("Students2",studentsSchema)