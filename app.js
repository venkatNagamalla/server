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


const PORT = process.env.PORT || 10000
const HOST = "0.0.0.0"

app.listen(PORT,HOST, () => {
    console.log(`Server started at ${PORT} ${HOST}`)
})