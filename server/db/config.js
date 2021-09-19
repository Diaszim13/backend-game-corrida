const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('game-corrida-mvc', 'root', '132465', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
