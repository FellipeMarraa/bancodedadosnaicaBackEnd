function cadastraAluno(req, res, next){
    res.status(200).send(req.body);
}

function verificaAluno(req, res, next){
    res.status(200).send(req.body);
}

module.exports = {cadastraAluno, verificaAluno}
