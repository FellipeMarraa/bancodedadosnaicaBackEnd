const fs = require('fs')

const alunoModel = require('../models/aluno')

async function cadastraAluno(req, res, next){

    let insercaoBanco = await alunoModel.create(req.body);

    console.log(insercaoBanco);
    next();
}

async function verificaAluno(req, res, next){

    let listarUsers = await alunoModel.find();
    req.body = listarUsers;
    next();

    console.log(verificaAluno);
}

async function postImage(req, res, next){
    console.log(req.body)
    console.log(req.file)

    const teste = await  alunoModel.create({
        imgURL: req.file.path
    })

    console.log(teste)
}

async function getImage(req, res, next){
    console.log(req.params.alunoID);
    const teste = await alunoModel.findById(req.params.alunoID)
    console.log(teste);
    fs.readFile(teste.imgURL, {encoding: 'base64'}, (err, data) => {
        console.log(data);
        res.status(200).send({"file":data})
    })
}

module.exports = {postImage, getImage, cadastraAluno, verificaAluno}
