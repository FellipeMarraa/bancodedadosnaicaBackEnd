const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicesModel = new Schema({

    nome: {
        type: String,
        required: true
    },

    naica: {
        type: String,
        required: true
    },

    imgURL: {
        type: String,
        required: false
    }

},
    {_id: true, collection: 'aluno' } // nomeando a collection e dizendo que o id sera gerado automaticamente
);

module.exports = mongoose.model('aluno', servicesModel);
