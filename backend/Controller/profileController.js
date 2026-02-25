const data = require("../Model/data")

const profileAdd = async (req, res) => {

    try {

        const user = await data.findById(req.userId).select("-password")

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