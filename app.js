var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config/database');

//Conexão com o db
mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('Conectado ao MongoDB');
});

var app = express();

app.set('json spaces',40);

//Boddy parser middleware

//Parse aplication/json
app.use(bodyParser.json())

app.use(function (req, res, next){

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    
    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers',"X-Requested-With, content-type");

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

//Criando Rotas
var contatos = require('./routes/contatos.js');
var pages = require('./routes/pages.js');

app.use('/pages',pages);
app.use('/contatos',contatos);



//Iniciar o servidor
const port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log('Server rodando na porta '+port);
});
