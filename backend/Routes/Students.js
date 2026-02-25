const express = require("express")
const router = express.Router()
const students = require("../Model/Students")

//add all students
router.post("/student", async (req, res) => {

    try {

        const { name, age } = req.body

        const student1 = new students({
            name,
            age
        })
        await student1.save()

        res.status(200).json({
            message: "data added sucessfully",
            data: student1
        })




    }

    catch (err) {

        res.status(500).send(err.message)

    }



})

//get students by name

router.get("/student/:name", async (req, res) => {

    try {
        const { name } = req.params

        const students2 = await students.find({
            name: {
                $regex: name,
                $options: "i"
            }

        })

        res.status(201).json({
            data: students2
        })


    }
    catch (err) {

        res.status(500).send(err.message)
    }

})



//get all students

router.get("/student", async (req, res) => {

    try {


        const students2 = await students.find()

        res.status(201).json({
            data: students2
        })


    }
    catch (err) {

        res.status(500).send(err.message)
    }

})


router.put("/student/:id", async (req, res) => {

    try {

        const { id } = req.params
        const { name, age } = req.body

        const value=await students.findByIdAndUpdate(id,
            { name,age  },
            {new:true,runValidators:true }
        
        )
        if(!value){
            return res.send("id not found")
        }

          return res.status(200).json({
      message: "Student updated successfully",
      data: value
    });


    }

    catch (err) {

        res.status(400).send(err.message)

    }




})


router.delete("/student/:id",async(req,res)=>{
    try{

        const{id}=req.params
        const{name,age}=req.body

        const del=await students.findByIdAndDelete(id,{

            name,age

        },{
            new:true,runValidators:true 

        })


        res.status(200).send("data deleted")

    }
    catch(err){

           res.status(400).send(err.message)

    }
})



module.exports = router



