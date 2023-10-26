const http = require("http");
const { URL } = require("url");
const getUsers = require("./modules/users");
const isEmptyObject = require("./modules/isEmptyObject");

const port = process.env.PORT || 3000;
const hostname = "127.0.0.1";
const server = http.createServer((req, res) => {
    const myUrl = new URL(req.url, "http://127.0.0.1");
    const params = myUrl.searchParams;

    // Проверяем на наличие запросов

    if (isEmptyObject(params)) {
        res.statusCode = 200;
        res.setHeader = "Content-Type : text/html";
        res.write("<h1>Hello World!!!</h1>");
        res.end();
    } else {
        //  Проверяем на запрос "users"

        if (params.has("users")) {
            res.statusCode = 200;
            res.setHeader = "Content-Type : application/json";
            res.write(getUsers());
            res.end();
            return;
        }

        // Проверяем запрос "hello"

        if (params.has("hello")) {
            if (params.get("hello")) {
                res.statusCode = 200;
                res.setHeader = "Content-Type : text/html";
                res.write(`<h1>Hello my friend ${params.get("hello")}!!!</h1>`);
                res.end();
                return;
            } else {
                //  Запрос "hello" с пустым именем

                res.statusCode = 400;
                res.setHeader = "Content-Type : text/html";
                res.write("<h1>Enter a name!</h1>");
                res.end();
                return;
            }
        }

        // Запрос есть, но он не обрабатывается

        res.statusCode = 500;
        res.setHeader = "Content-Type : text/html";
        res.write("");
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Сервер запущен по адресу http://${hostname}:${port}`);
});
