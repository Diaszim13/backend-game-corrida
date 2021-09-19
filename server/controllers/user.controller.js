const express = require('express');

const user = require('../models/user.models');

const Router = express.Router();

Router.get('/findUsers', async(req, res) => {
    const users = await user.findAll();

    if(user) {
        res.status(200).send({status: true, users});
    }else {
        res.status(400).send({status: 'error', msg: 'algo deu errado!'});
    }
})

Router.get('/findUserById/:id', async(req,res) => {
    const User = await user.findOne({
        where: {ID_USUARIO: req.params.id}
    });

    if(User) {
        res.status(200).send({status: true, User});
    } else {
        res.status(400).send({status: 'error', msg: 'algo deu errado!'});
    }
})

Router.post('/CreateUser', async(req,res) => {
    const userLogin =  await user.findOne({
        where: {RA: req.body.RA}
    });
        if(userLogin != null) {
            return res.status(300).send({ status: false, message: 'User already exists'})
        }
        const User = await user.create({
            NOME: req.body.NOME,
            TIPO: req.body.TIPO,
            RA: req.body.RA,
            SENHA: req.body.SENHA
        })
        return res.status(200).send({result: true, User, message: 'Usuario cadastrado com sucesso!'});

})

Router.delete('/deleteUser/:id', async(req, res) => {
    const response = await user.destroy({
        where: {
            ID_USUARIO: req.params.id
        }
    })

    if(response) {
        if(response) {
            res.status(200).send({status: true, msg: 'deu tudo certo'});
            }else {
            res.status(400).send({status: false, msg: 'algo errado aconteceu'});
            }
    }
})

module.exports = app => app.use('/usuarios', Router);