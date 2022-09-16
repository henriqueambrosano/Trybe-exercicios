const bookService = require('../services/book.service');

const error500Message = {message: 'Algo deu errado'}

const getAll = async (req, res) => {
  try {
    const books = await bookService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error500Message);    
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.getById(id);
    if (!book) return res.status(404).json({message: 'Book not found'})

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error500Message);    
  }
};

const createBook = async (req, res) => {
  try {
    const newBook = req.body;
    const result = await bookService.createBook(newBook);
    return res.status(201).json(result)
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error500Message)
  }
};

const updateBook = async (req, res) => {
  try {
    const newBook = req.body;
    const { id } = req.params;
    const updatedBook = await bookService.updateBook(id, newBook);
    if (!updatedBook) return res.status(404).json({message: 'Book not found'})
    return res.status(200).json({message: 'Book updated!'});    
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error500Message)
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await bookService.deleteBook(id);
    
    if(!deletedBook) return res.status(404).json({ message: 'Book not found'})
    return res.status(200).json({message: 'Book deleted'});
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error500Message)
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
}