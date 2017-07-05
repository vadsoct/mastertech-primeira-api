var MongoClient = require('mongodb').MongoClient;

var db;
var url = 'mongodb://localhost:27017/primeira-api';

MongoClient.connect(url, function (err, database) {
  if (err) return console.log(err);
  db = database;
});

// lista alunos
exports.listar = function (req, res) {
  db.collection('alunos').find().toArray(function(err, alunos) {
    if (err) return console.log(err);

    res.send(alunos);
  });
};

// cria um novo aluno
exports.criar = function (req, res) {
  db.collection('alunos').save(req.body, function(err, result) {
    if (err) return console.log(err);

    res.sendStatus(200);
  });
};

// atualiza um aluno
exports.atualizar = function (req, res) {
  var id = req.params.id;

  db.collection('alunos').update({_id: id}, {$set: req.body}, function(err, result) {
    if (err) return console.log(err);

    res.sendStatus(200);
  });
};

// remove um aluno utilizando o id
exports.apagar = function (req, res) {
  var id = req.params.id;

  db.collection('alunos').remove({_id: id}, {safe: true}, function(err, result) {
    if (err) return console.log(err);

    res.sendStatus(200);
  });
};

// recupera um aluno utilizando o id
exports.recuperar = function (req, res) {
  var id = req.params.id;

  res.sendStatus(200);
};
