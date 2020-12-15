const mongoose = require('mongoose');
const Schema = mongoose.Schema; //Schema permite a tipagem de dados e modelagem

const usersModel = new Schema(
    {
        login : {
            type: String,
            required: true
        },

        senha : {
            type: String,
            required: true
        },

        nome : {
            type: String,
            required: true
        },

        naica : {
            type: String,
            required: true
        }
    },
        {_id: true, collection: 'users'} //nomeando a collection e definindo que o id seja gerado automaticamente
);


module.exports = mongoose.model('users', usersModel);