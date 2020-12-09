function cadastraUser(req, res, next){
    res.status(200).send(req.body);
}

function verificaUser(req, res, next){
    res.status(200).send(req.body);
}


function loginUser(req, res, next){
    if (res.locals.data.result !== null && typeof res.locals.data.token !== 'undefined') {
        res.status(200).send({token: res.locals.data.token, tipo: res.locals.data.tipo});
    }else{
        console.log(res.locals.data.Message)
        res.status(400).send({
            message: res.locals.data.Message
        })
    }
}

module.exports = {cadastraUser, verificaUser, loginUser}
