
const jwt = require('jsonwebtoken');
const userModel = require('../models/users');

async function cadastraUser(req, res, next){

    let insercaoBanco = await userModel.create(req.body);

    console.log(insercaoBanco);
    next();
}

async function verificaUser(req, res, next){

    let listarUsers = await userModel.find();
    req.body = listarUsers;
    next();

    console.log(verificaUser);
}

async function loginUser(req, res, next) {

    console.log("Os dados do request chegaram no middleware")
    let resultadoBanco;
    console.log("retorno do banco")

    try {
        resultadoBanco = await userModel.findOne({login: req.body.login});
        if (resultadoBanco) {

            if (resultadoBanco.senha === req.body.senha) {
                var token = jwt.sign(
                    {
                        "type": resultadoBanco.tipo,
                        "cpf": resultadoBanco.cpf,
                        exp: Math.floor(Date.now() / 1000) + (60 * 60)
                    }, 'palavraSuperSecreta');

                res.locals.data = {token: token, tipo: resultadoBanco.tipo};
                return next();
            } else {
                res.locals.data = {"Message": "Senha invalida"}
                return next();
            }
        } else {
            res.locals.data = {"Message": "Usuario nao encontrado"}
            return next();
        }
    }catch (error){
        console.log(error)
        res.locals.data = {"Message":"Internal server error"}
        return next();
    }
}
module.exports = {cadastraUser, verificaUser, loginUser}
