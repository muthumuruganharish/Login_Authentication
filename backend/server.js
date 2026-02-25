const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// const demoRouter = require("./Routes/Demo");
// const studentRouter=require("./Routes/Students")
const data=require("./Routes/data")

const app = express();
app.use(cors());
app.use(express.json());

// REGISTER ROUTER HERE
// app.use("/demo", demoRouter);
// app.use("/details",studentRouter)
app.use("/api/users",data)
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log("Mongo error:", err));

app.get("/", (req, res) => {
  res.send("Backend working");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
