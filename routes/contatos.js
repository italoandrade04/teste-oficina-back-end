var express = require('express');
var router = express.Router();

//Usando contato Model
var Contato = require('../models/contato');

//Metodo GEt
router.get('/', function(req, res){
    Contato.find({},function(err,contatos){
        if(err) console.log(err);
        res.json(contatos);
    })
});

router.post('/',function(req, res){
    var contato = new Contato();
    contato.nome = req.body.nome;
    contato.dataNascimento = req.body.dataNascimento;
    contato.email = req.body.email;
    contato.numero = req.body.numero;

    contato.save(function(err){
        if(err)
            res.send(err);

        res.json({message : "Cadastrado com Sucesso"});
    });
});

router.get('/:id', function(req, res){

    Contato.findById(req.params.id,function(err, contato){
        if(err) console.log(err);
        res.json(contato);
    });
});

router.put('/:id',function(req, res, next){
    Contato.findByIdAndUpdate(req.params.id, req.body, function(err,post){
        if(err) return next(err);
        res.json(post);
    });

});

router.delete('/:id',function(req, res, next){
    Contato.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);

        res.json(post);
    });
});
//Exportando
module.exports = router;