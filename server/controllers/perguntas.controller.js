const express = require('express');

const pergunta = require('../models/perguntas.model');

const Router = express.Router();

Router.get('/findPerguntas', async(req, res) => {
    const perguntas = await pergunta.findAll();

    if(perguntas.length > 0) {
        res.status(200).send({status: true, perguntas});
    }else {
        res.status(400).send({status: 'error', msg: 'algo deu errado!'});
    }
})


module.exports = app => app.use('/perguntas', Router);