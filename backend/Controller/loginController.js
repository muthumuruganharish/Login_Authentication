const data = require("../Model/data")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {

    const { email, password } = req.body

    const dataExists = await data.findOne({ email })

    if (!dataExists) {
      return res.status(400).json({ message: "no email match found" })
    }

    console.log("Entered password:", password)
    console.log("DB password:", dataExists.password)



    // here we are comparing hashing password to normal password 
    const isMatch = await bcrypt.compare(password, dataExists.password)

    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password" })
    }




    //Jwt token
    const token = jwt.sign(
      { id: dataExists._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );




    res.status(200).json({ message: "Login Successfully" })

  }
  catch (err) {
    console.log("error:", err)
    res.status(500).json({ message: err.message })
  }
}

module.exports = { login }
