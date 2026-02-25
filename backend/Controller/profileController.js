const data = require("../Model/data")

const profileAdd = async (req, res) => {

    try {

        const user = await data.findById(req.userId).select("-password")//.select("-password") means it will not send password to frontend for safety purpose

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        res.json({
            name: user.name,
            email: user.email,
            phone: user.phone,
            dob: user.dob
        })



    }

    catch (err) {

        return res.status(500).json({
            message: err.message
        })


    }


}
module.exports = { profileAdd }
