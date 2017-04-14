var Sequelize = require('sequelize');
var sequelize = require( './connection');
var express = require('express');
var router = express.Router();

var Book = require('./Books');
var Publisher = require('./Publisher');

module.exports.relationship = () => {
    Publisher.hasMany(Book, {foreignKey: 'idPub'});
    Book.belongsTo(Publisher, {foreignKey: 'idPub'});
    sequelize.sync();
};