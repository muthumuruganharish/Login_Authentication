const data=require("../Model/data")

const profileAdd=async(req,res)=>{

    try{

        const user=await data.findById(req.userId).select("password")
        // req.userId is from profileMiddleware
        res.json({
            name:user.name,
            email:user.email

        })



    }

    catch (err){

        return res.status(500).json({
            message:err.message
        })


    }


}
module.exports={profileAdd}