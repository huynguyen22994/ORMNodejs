var Sequelize = require('sequelize');
var fs = require('fs');
var data = fs.readFileSync('config/configDB.json');
var path = require('path');
var lodash = require('lodash');
var db = {};

// parse Json to Object
var database = JSON.parse(data.toString());

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

fs.readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file != 'index.js')
  })
  .forEach((file) => {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  })

  Object.keys(db).forEach((modelName) => {
    if(db[modelName].options.hasOwnProperty('associate')) {
      db[modelName].options.associate(db)
    }
  })

module.exports = lodash.extend({
    sequelize: sequelize,
    Sequelize: Sequelize
}, db)