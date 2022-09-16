const bookModel = (sequelize, DataType) => {
  const Book = sequelize.define('Book', {
    title: DataType.STRING,
    author: DataType.STRING,
    pageQuantity: DataType.INTEGER,
    createdAt: DataType.DATE,
    updatedAt: DataType.DATE,
  })
  return Book
};

module.exports = bookModel;