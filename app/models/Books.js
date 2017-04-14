var Sequelize = require('sequelize');
var sequelize = require( './connection');

var Book = sequelize.define('Book', {
    title: { type: Sequelize.STRING, allowNull: false, defaultValue: true},
    author: { type: Sequelize.STRING, allowNull: false},
    ISBN: {type: Sequelize.STRING, unique: true},
    idPub: {type: Sequelize.INTEGER, allowNull: false}
  });

sequelize.sync();

module.exports = Book;