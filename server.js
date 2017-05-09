var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var async = require('async');
var swagger = require('swagger-tools');

// apis
var books = require('./app/apis/booksAPI');
var publishers = require('./app/apis/publishersAPI');
var users = require('./app/apis/usersAPI');

// route
var home = require('./app/routes/home');

// references database
var rela = require('./app/models/relationship');
rela.relationship();

// swagger
var swaggerObj = require('./app/swagger/swagger.json');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var http = require('http').createServer(app);

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));
app.use('/bower',express.static(__dirname + "/bower_components"));
app.use(bodyParser.json());

// routing
app.use('/', home);

// API Use
app.use('/', books);
app.use('/', publishers);
app.use('/', users);

var options = {
    swaggerUi: '/swagger.json',
    controllers: __dirname + '/app/controllers'
};

swagger.initializeMiddleware(swaggerObj, (middleware) => {
    app.use(middleware.swaggerMetadata());
    app.use(middleware.swaggerSecurity({
        oauth2: function (req, def, scopes, callback) {
        // Do real stuff here
        }
    }));
    app.use(middleware.swaggerRouter(options));
    app.use(middleware.swaggerUi());
     // Serve the Swagger documents and Swagger UI
    //   http://localhost:3000/docs => Swagger UI
    //   http://localhost:3000/api-docs => Resource Listing JSON
});

http.listen(app.get('port'),() => {
    console.log(`Server is running on port ${app.get('port')}`);
    console.log(`Docs Apis is running on: ${app.get('port')}/docs`);
});

module.exports = app;