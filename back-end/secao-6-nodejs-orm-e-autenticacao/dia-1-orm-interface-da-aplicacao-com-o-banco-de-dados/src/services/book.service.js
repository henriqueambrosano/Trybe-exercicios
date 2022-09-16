const { userInfo } = require('os');
const { Book } = require('../models/index');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const createBook = async (newBook) => {
  const result = await Book.create(newBook);
  return result
};

const updateBook = async (id, newBook) => {
  const bookId = { where: { id } }
  const [updatedBook] = await Book.update(newBook, bookId);
  return updatedBook;
};

const deleteBook = async (id) => {
  const bookId = { where: { id } }
  const result = await Book.destroy(bookId);
  console.log(result);
  return result
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
}