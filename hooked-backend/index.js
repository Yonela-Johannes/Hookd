const express = require("express");
const app = express()
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

dotenv.config()

mongoose.connect(process.env.MONGO_URL, { useNewUlrParser: true }, () => {
    console.log("connected to MongoDB")
})

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)


const PORT = 8800;

app.listen(PORT, () => {
    console.log('backend server running at:', PORT)
})