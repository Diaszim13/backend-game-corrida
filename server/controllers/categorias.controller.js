const express = require('express');

const categoria = require('../models/categorias.model');

const Router = express.Router();

Router.get('/findCategorias', async (req, res) => {
    const categorias = await categoria.findAll();

    if(categorias) {
        res.status(200).send({status: true, categorias})
    }else {
        res.status(400).send({status: 'error', msg: 'algo deu errado!'});
    }
});

Router.post('/createCategorias', async(req,res) => {
    const Categoria = await categoria.create({
        NOME: req.body.NOME,
        DESCRICAO: req.body.DESCRICAO,
    }) 
    return res.status(200).send({result: true, Categoria, message: 'Categoria criada com sucesso'});
})


module.exports = app => app.use('/categorias', Router);