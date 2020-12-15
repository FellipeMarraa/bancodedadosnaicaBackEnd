const jwt = require('jsonwebtoken');
const userModel = require('../models/users');

async function cadastraUser(req, res, next) {

    let insercaoBanco = await userModel.create(req.body);

    console.log(insercaoBanco);
    next();
}

async function verificaUser(req, res, next) {

    let listarUsers = await userModel.find();
    req.body = listarUsers;
    next();

    console.log(verificaUser);

    // function restrict(req, res, next) {
//     if (req.session.user) {
//         next();
//     } else {
//         req.session.error = 'Access denied!';
//         res.redirect('/');
//     }
// }
//
// app.get('/restricted', restrict, function (req, res) {
//     res.send('Wahoo! restricted area, click to logout');
// });
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
                        "nome": resultadoBanco.nome,
                        "naica": resultadoBanco.naica,
                        exp: Math.floor(Date.now() / 1000) + (60 * 60)
                    }, 'palavraSuperSecreta');

                res.locals.data = {token: token, naica: resultadoBanco.naica};
                return next();
            } else {
                res.locals.data = {"Message": "Senha invalida"}
                return next();
            }
        } else {
            res.locals.data = {"Message": "Usuario nao encontrado"}
            return next();
        }
    } catch (error) {
        console.log(error)
        res.locals.data = {"Message": "Internal server error"}
        return next();
    }
}

module.exports = {cadastraUser, verificaUser, loginUser}
