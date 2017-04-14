var express = require('express');
var router = express.Router();
var async = require('async');
var bodyParser = require('body-parser');
var Book = require('../controllers/BookCtrl');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/api/book', (req, res) => {
     Book.getBooks().then((books) => {
        res.end(JSON.stringify(books));
     });
});

router.post('/api/book', urlencodedParser, (req, res) => {
    let book = {
        title: req.body.title,
        author: req.body.author,
        ISBN: req.body.ISBN,
        idPub: req.body.idPub
    }
    async.series([
       (callback) => {
            Book.insertBook(book, callback);
       },
       (callback) => {
            res.end('Insert success!');
       }
    ]);
});

router.delete('/api/book/:id', urlencodedParser, (req, res) => {
    console.log(req.params.id);
    Book.deleteBook(req.params.id).then(() => {
        res.end("Xoa thanh cong");
    });
});

router.put('/api/book', urlencodedParser, (req, res) => {
    Book.editBook(req.body).then(() => {
        res.end("update success");
    });
});

router.get('/api/onebook/:id', urlencodedParser, (req, res) => {
    Book.findByID(req.params.id).then((book) => {
        res.end(JSON.stringify(book));
    });
});

router.get('/api/booksbyidpub/:id', urlencodedParser, (req, res) => {
    Book.getBooksByIdPub(req.params.id).then((books) => {
        res.end(JSON.stringify(books));
    });
});

router.get('/api/getAllInfoBook/:id', urlencodedParser, (req, res) => {
    Book.getAllInfoBook(req.params.id).then((book) => {
        res.end(JSON.stringify(book));
    });
});

router.get('/api/countbook', (req, res) => {
    Book.countBooks().then((count) => {
        res.end(JSON.stringify(count));
    });
});

module.exports = router;