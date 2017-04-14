var express = require('express');
var router = express.Router();
var async = require('async');
var bodyParser = require('body-parser');
var Publisher = require('../controllers/PublisherCtrl');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/api/publisher', (req, res) => {
    Publisher.getPublishers().then((publisher) => {
        res.end(JSON.stringify(publisher));
    });
});

router.post('/api/publisher', urlencodedParser, (req, res) => {
    let publisher = {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone
    }
    async.series([
        (callback) => {
            Publisher.insertPublisher(publisher, callback);
        },
        (callback) => {
            res.end("Insert succsess!");
        }
    ]);
});

router.delete('/api/publisher/:id', urlencodedParser, (req, res) => {
    Publisher.deletePublisher(req.params.id).then(() => {
        res.end("Delete success!");
    });
});

router.get('/api/onepublisher/:id', urlencodedParser, (req, res) => {
    Publisher.findOnePublisher(req.params.id).then((publisher) => {
        res.end(JSON.stringify(publisher));
    });
});

router.put('/api/publisher', urlencodedParser, (req, res) => {
    Publisher.editPublisher(req.body).then(() => {
        res.end("Update success!");
    });
});

module.exports = router;