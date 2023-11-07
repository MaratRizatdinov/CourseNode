const express = require("express")
const dotenv = require("dotenv")
const userRouter = require("./routes/users")
const bookRouter = require("./routes/books")
const errorPath = require('./middlewares/errorPath')
const logOriginalUrl =require('./middlewares/logOriginalUrl')
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

dotenv.config()

const {
    PORT = 3000,
    API_URL = "http://127.0.0.1",
    MONGO_URL = "mongodb://localhost:27017/mydb",
} = process.env

mongoose
    .connect(MONGO_URL)
    .then((res) => console.log("Подключение к БД успешно"))
    .catch((err) => console.log("error"));

const app = express()

const HelloWorld = (req, res) => {
    res.status(200).send("Hello,World!!!")
}

app.use(cors())

app.use(bodyParser.json())
app.get("/", HelloWorld)

app.use(logOriginalUrl)
app.use(userRouter)
app.use(bookRouter)
app.use(errorPath);

app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`)
})
