const {Sequelize, DataTypes} = require('sequelize')

const database = require('../db/config')
const categorias = require('../models/categorias.model')
const perguntas = database.define('perguntas', {
    ID_PERGUNTA: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        required: true

    },
    CONTEUDO: {
        type: DataTypes.STRING,
        allowNull: false,
        requires: true,
    },
    ID_CATEGORIA: {
        type: DataTypes.UUID,
        references: {
            model: 'categorias', 
            key: 'ID_CATEGORIA'
        }
    }
})
// perguntas.hasMany(categorias, {foreignKey: 'ID_CATEGORIA'})
perguntas.belongsTo(categorias)
database.sync(perguntas)

module.exports = perguntas;