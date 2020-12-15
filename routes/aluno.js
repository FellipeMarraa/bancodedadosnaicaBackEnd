var multer = require("multer");
var express = require('express');
var router = express.Router();

const middlewareAluno = require('../middlewares/aluno');
const alunoController = require('../controllers/aluno');


router.get('/',
    middlewareAluno.verificaAluno,
    alunoController.verificaAluno
);

router.post('/cadastro',
    middlewareAluno.cadastraAluno,
    alunoController.cadastraAluno
);

// var storage = multer.diskStorage({
//
//     destination: function (req, file, cb){
//
//         cb(null, '/home/fellipemarra/Dev/Faculdade/bancodedadosnaicaBackend/assets/'.concat(req.body.nome))
//     },
//     filename: function(req, file, cb){
//         cb(null, file.originalname)
//     }
// });
//
// var upload = multer({storage:storage});
//
// router.post('/',
//     upload.single('image'),
//     alunoMid.postImage
// )
//
// router.get('/:alunoID',
//
//     alunoMid.getImage
// )

module.exports = router;
