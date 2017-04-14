var Sequelize = require('sequelize');
var fs = require('fs');
var db = fs.readFileSync('config/configDB.json');

// parse Json to Object
var database = JSON.parse(db.toString());

//sequelize
var sequelize = new Sequelize(database.dbname, database.username, database.password, {
  host: database.host,
  dialect: database.dialect,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  //storage: 'http://localhost/phpmyadmin/to/database.sqlite'
});

module.exports = sequelize;