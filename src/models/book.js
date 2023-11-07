const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
        minLength: 2,
    },
    bookAuthor: {
        type: String,
        required: true,
        minLength: 2,
    },
    bookReleaseYear: {
        type: Number,
        required: true,
        minLength: 4,
    },
})

module.exports = mongoose.model("book", bookSchema)
