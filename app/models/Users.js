var Sequelize = require('sequelize');
var sequelize = require('./connection');

var User = sequelize.define('User', {
    id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    name: {type: Sequelize.STRING, allowNull: false},
    age: {type: Sequelize.INTEGER, allowNull: false},
    address: {type: Sequelize.STRING, allowNull: true}
},
{
    timestamps: true,
    paranoid: true,
    underscored: true,
    tableName: "User_table"
});

sequelize.sync();

module.exports = User;