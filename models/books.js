const mongoose = require("mongoose");
const Model = mongoose.Model;
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookName: String,
    authorName: String,
    price: Number
})


const book = Model("book", bookSchema);

module.exports = book;