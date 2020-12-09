const mongoose = require('mongoose');
const Schema = mongoose.Schema; //Schema permite a tipagem de dados e modelagem

const usersModel = new Schema(
    {
        login : {
            type: String,
            required: false
        },

        senha : {
            type: String,
            required: false
        },

        nome : {
            type: String,
            required: false
        },

        naica : {
            type: String,
            required: false
        }
    },
        {_id: true, collection: 'users'} //nomeando a collection e definindo que o id seja gerado automaticamente
);


module.exports = mongoose.model('users', usersModel);