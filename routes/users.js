var express = require('express');
var router = express.Router();

const middlewareUser = require('../middlewares/users');
const userController = require('../controllers/users');
const multer = require("multer");


/* GET users listing. */
router.get('/',
    middlewareUser.verificaUser,
    userController.verificaUser
);

router.post('/cadastro',
    middlewareUser.cadastraUser,
    userController.cadastraUser
);

router.post('/login',
    middlewareUser.loginUser,
    userController.loginUser
);

module.exports = router;

