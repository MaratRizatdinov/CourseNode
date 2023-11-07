const express = require("express");
const http = require("http");
const { URL } = require("url");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const getUsers = require("./modules/users");
const getBooks = require("./modules/books");
const isEmptyObject = require("./modules/isEmptyObject");

dotenv.config();

const {
    PORT = 3000,
    API_URL = "http://127.0.0.1",
    MONGO_URL = "mongodb://localhost:27017/backend",
} = process.env;

// mongoose
//     .connect(MONGO_URL)
//     .then((res) => console.log("first"))
//     .catch((err) => console.log("error"));

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello,World!!!");
});

//#region

//  const hostname = API_URL.hostname;
// const server = http.createServer((req, res) => {
//     const myUrl = new URL(req.url, API_URL);
//     const searchParams = myUrl.searchParams;

//     // Запрос коллекции users

//     if (req.url === "/users") {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "application/json; charset=utf-8");
//         res.write(getUsers());
//         res.end();
//         return;
//     }

//     // Запрос коллекции books

//     if (req.url === "/books") {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "application/json; charset=utf-8");
//         res.write(getBooks());
//         res.end();
//         return;
//     }

//     // Проверяем на наличие запросов

//     if (isEmptyObject(searchParams)) {
//         res.statusCode = 200;
//         res.setHeader = "Content-Type : text/html";
//         res.write("<h1>Hello World!!!</h1>");
//         res.end();
//     } else {
//         // Проверяем запрос "hello"

//         if (searchParams.has("hello")) {
//             if (searchParams.get("hello")) {
//                 res.statusCode = 200;
//                 res.setHeader = "Content-Type : text/html";
//                 res.write(
//                     `<h1>Hello my friend ${searchParams.get("hello")}!</h1>`
//                 );
//                 res.end();
//                 return;
//             } else {
//                 //  Запрос "hello" с пустым  именем

//                 res.statusCode = 400;
//                 res.setHeader = "Content-Type : text/html";
//                 res.write("<h1>Enter a name!</h1>");
//                 res.end();
//                 return;
//             }
//         }

//         // Запрос есть, но он не обрабатывается

//         res.statusCode = 500;
//         res.setHeader = "Content-Type : text/html";
//         res.write("");
//         res.end();
//     }
// });

//#endregion

app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
