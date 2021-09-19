
const {Sequelize, DataTypes} = require('sequelize');
const database = require('../db/config')

const perguntas = require('../models/perguntas.model')

const Categorias = database.define('categorias', {
    ID_CATEGORIA: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        required: true,
        

    },
    NOME: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    },
    DESCRICAO: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    }
})


database.sync(Categorias);

module.exports = Categorias