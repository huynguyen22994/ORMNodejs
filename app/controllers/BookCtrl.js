var Book = require('../models/Books');
var Publisher = require('../models/Publisher');

module.exports.getBooks = (req, res) => {
  console.log('fsdfsdf');
   return Book.findAndCountAll().then(function(books) {
    console.log(books);
    var Books = JSON.stringify(books.rows);
    res.end(Books);
   })
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