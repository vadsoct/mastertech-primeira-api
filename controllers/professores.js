var MongoClient = require('mongodb').MongoClient;

var db;
var url = 'mongodb://localhost:27017/primeira-api';

MongoClient.connect(url, function (err, database) {
  if (err) return console.log(err);
  db = database;
});

// lista professores
exports.listar = function (req, res) {
  db.collection('professores').find().toArray(function(err, result) {
    if (err) {
      return console.log(err)
    };

    res.send(result);
  });
};

// cria um novo professor
exports.criar = function (req, res) {
  var professor = req.body;

  if (professor.nome) {
    // salva no mongodb
    db.collection('professores').save(professor, function(err, result) {
      if (err) {
        console.log('entrou no erro');
        return res.sendStatus(503);
      }
      console.log('apos o if');
      res.sendStatus(201);
    });
  } else {
    res.sendStatus(415);
  }


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

  db.collection('alunos').remove({_id: id}, {justOne: true}, function(err, result) {
    if (err) return console.log(err);

    res.sendStatus(200);
  });
};

// recupera um aluno utilizando o id
exports.recuperar = function (req, res) {
  var id = req.params.id;

  res.sendStatus(200);
};
