const express = require("express");
const app = express()
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan")
const userRoute = require("./routes/users")
const maestroRoute = require("./routes/maestro")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
}).then(() => console.log("Database connected"))
    .catch(err => console.log(err))


// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute)
app.use("/api/maestro", maestroRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)

const PORT = 8801;

app.listen(PORT, () => {
    console.log('backend server running at:', PORT)
})