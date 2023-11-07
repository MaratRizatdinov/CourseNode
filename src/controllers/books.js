const Book = require("../models/book")

//--Получить список всех книг--

const getBooks = (req, res) => {
    return Book.find({})
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((err) => {
            res.status(500).send(err.message)
        })
}

//--Получить данные книги по её ID

const getBook = (req, res) => {
    const { book_id } = req.params
    return Book.findById(book_id)
        .then((data) => {
            if (data === null)
                return res
                    .status(404)
                    .send(
                        `Error code: ${res.statusCode}. Book with id: ${book_id} was not found`
                    )
            res.status(200).send(data)
        })
        .catch((err) => {
            res.status(500).send(err.message)
        })
}

//--Создать новую книгу

const createBook = (req, res) => {
    return Book.create({ ...req.body })
        .then((book) => {
            res.status(201).send(book)
        })
        .catch((err) => {
            res.status(500).send(err.message)
        })
}

//--Внести изменения в данные книги

const updateBook = (req, res) => {
    const { book_id } = req.params
    return Book.findByIdAndUpdate(book_id, { ...req.body }, { new: true })
        .then((data) => {
            if (data === null)
                return res
                    .status(404)
                    .send(
                        `Error code: ${res.statusCode}. Book with id: ${book_id} was not found`
                    )
            res.status(200).send(data)
        })
        .catch((err) => {
            res.status(500).send(err.message)
        })
}

//--Удалить книгу по её ID

const deleteBook = (req, res) => {
    const { book_id } = req.params
    return Book.findByIdAndDelete(book_id)
        .then((data) => {
            if (data === null)
                return res
                    .status(404)
                    .send(
                        `Error code: ${res.statusCode}. Book with id: ${book_id} was not found`
                    )
            res.status(200).send("Success")
        })
        .catch((err) => {
            res.status(500).send(err.message)
        })
}

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
}
