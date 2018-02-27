var mongoose = require('mongoose');

//Contato Schema
var ContatoSchema = mongoose.Schema({
    nome:{
        type:String
    },
    dataNascimento:{
        type:String
    },
    email:{
        type:String
    },
    telefone:{
        type:String
    }
});

var Contato = module.exports = mongoose.model("Contato",ContatoSchema);