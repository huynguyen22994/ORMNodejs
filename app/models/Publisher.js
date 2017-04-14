var Sequelize = require('sequelize');
var sequelize = require( './connection');

var Publisher = sequelize.define('Publisher', {
    idPub: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    name: {type: Sequelize.STRING, allowNull: false },
    address: {type: Sequelize.STRING, allowNull: false },
    phone: {type: Sequelize.CHAR({length: 12}), allowNull: true}
});

sequelize.sync();

module.exports = Publisher;