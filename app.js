const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const mongoose = require("mongoose")
const userModel = require("./models/model")

const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGODB_URL)

app.get("/users", (req,res) => {
    userModel.find({}).then((users) => res.send(users)).catch((err) => res.send(err));
})


app.listen(process.env.PORT, () => {
    console.log("server started...")
})