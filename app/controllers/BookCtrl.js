var Book = require('../models/Books');
var Publisher = require('../models/Publisher');

module.exports.getBooks = () => {
   return Book.all();
};

module.exports.insertBook = (book, callback) => {
     Book.create({
        title: book.title,
        author: book.author,
        ISBN: book.ISBN,
        idPub: book.idPub,
    });
    callback();
};

module.exports.deleteBook = (idBook) => {
    return Book.destroy({
      where: {
        id: idBook
      }
    })
};

module.exports.findByID = (id) => {
    return Book.findById(id)
};

module.exports.editBook = (book) => {
  return Book.update({title: book.title, author: book.author, ISBN: book.ISBN}, {where: {id: book.id} });
};

module.exports.getBooksByIdPub = (idPub) => {
  return Book.findAll({where: {idPub: idPub}});
};

module.exports.getAllInfoBook = (id) => {
  return Book.find({where: {id: id}, include: [Publisher]});
};

module.exports.countBooks = () => {
  return Book.count();
};