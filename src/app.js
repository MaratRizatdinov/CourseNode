const express = require("express")
const dotenv = require("dotenv")
const userRouter = require("./routes/users")
const loggerOne = require("./middlewares/loggerOne")
const loggerTwo = require("./middlewares/loggerTwo")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
// const getUsers = require("./modules/users");
// const getBooks = require("./modules/books");
// const isEmptyObject = require("./modules/isEmptyObject");

dotenv.config()

const {
    PORT = 3000,
    API_URL = "http://127.0.0.1",
    MONGO_URL = "mongodb://localhost:27017/mydb",
} = process.env

mongoose
    .connect(MONGO_URL)
    .then((res) => console.log("first"))
    .catch((err) => console.log("error"));

const app = express()

const HelloWorld = (req, res) => {
    res.status(200).send("Hello,World!!!")
}

app.use(cors())
app.use(loggerOne)
app.use(loggerTwo)
app.use(bodyParser.json())
app.get("/", HelloWorld)

app.use(userRouter)

app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`)
})
