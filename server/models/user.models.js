const {Sequelize, DataTypes} = require('sequelize');
const database = require('../db/config');

const User = database.define('usuarios', {
    ID_USUARIO: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        required: true
    },
    NOME: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
        is: ["^[a-z]+$" , 'i'],
    },
    TIPO: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true
        
    },
    RA: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
        
    },
    SENHA: {
        type: DataTypes.TEXT,
        allowNull: false,
        required: true
    
    },
})


// database.sync(User);


module.exports = User;