var express = require('express');
var router = express.Router();
var async = require('async');
var bodyParser = require('body-parser');
var User = require('../controllers/UserCtrl');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/api/user', urlencodedParser, (req, res) => {
    User.createUser(req.body).then(() => {
        res.end("Insert succsess!");
    });
});

router.get('/api/nameIdUser/:id', urlencodedParser, (req, res) => {
    User.getNameAndAge(req.params.id).then((user) => {
        res.end(JSON.stringify(user));
    });
});

module.exports = router;