const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicesModel = new Schema({

        nome: {
            type: String,
            required: true
        },

        naica: {
            type: String,
            required: false
        },

        dataNascimento: {
            type: Date,
            required: true
        },
        idadeAtual: {
            type: Number,
            required: true
        },
        idadeInicial: {
            type: Number,
            required: true
        },
        sexo: {
            type: String,
            required: true
        },
        nisAtendido: {
            type: String,
            required: true
        },
        dataMatricula: {
            type: Date,
            required: true
        },
        desligado: {
            type: Date
        },
        escola: {
            type: String,
            required: true
        },
        anoEscolar: {
            type: Number,
            required: true
        },
        periodoEscolar: {
            type: String,
            required: true
        },
        desacompanhado: {
            type: String
        },
        autorizadoBuscar: {
            type: String,
        },
        nomeResponsavel: {
            type: String,
            required: true
        },
        telefone: {
            type: Array,
            required: true
        },
        dataNascimentoResponsavel: {
            type: Date,
            required: true
        },
        cpf: {
            type: String,
            required: false
        },
        identidade: {
            type: String,
            required: true
        },
        dataEmissao: {
            type: Date,
            required: true
        },
        uf: {
            type: String,
            required: true
        },
        orgaoExpeditor: {
            type: String,
            required: true
        },
        ctps: {
            type: String,
            required: true
        },
        nisResponsavel: {
            type: String,
            required: true
        },
        endereco: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: false
        },
        observacao: {
            type: String,
            required: false
        },


    },
    {_id: true, collection: 'aluno'} // nomeando a collection e dizendo que o id sera gerado automaticamente
);

module.exports = mongoose.model('aluno', servicesModel);
