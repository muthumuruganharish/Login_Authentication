const jwt = require("jsonwebtoken")

const protect = (req, res, next) => {

    const authHeader = req.headers.authorization;//When frontend sends a request to backend, it sends:Body (data) ,URL,Method,Headers

    if (!authHeader) {
        return res.status(401).json({ message: "Not authorized" })
    }

    const token = authHeader.split("")[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
       
        req.userId = decoded.id;  //here user id is stored in token

        next();
    }

    catch (err) {

        return res.status(401).json({
            message: "invalid token"
        })

    }


}

module.exports = protect