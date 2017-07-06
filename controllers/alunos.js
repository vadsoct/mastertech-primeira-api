var ObjectID = require('mongodb').ObjectID;

// lista alunos
exports.listar = function (req, res) {
  req.db.collection('alunos').find().toArray(function(err, alunos) {
    if (err) {
      return res.sendStatus(503);
    }

    res.send(alunos);
  });
};

// recupera alunos de uma turma
exports.recuperarTurma = function(req, res) {
  var t = req.params.turma;

  req.db.collection('alunos').find({turma: t}).toArray(function(err, alunos) {
    if (err) {
      return res.sendStatus(503);
    }

    res.send(alunos); // status implicito 200
  });
};

// cria um novo aluno
exports.criar = function (req, res) {
  req.db.collection('alunos').save(req.body, function(err, result) {
    if (err) {
      return res.sendStatus(503);
    }

    res.sendStatus(201);
  });
};

// atualiza um aluno
exports.atualizar = function (req, res) {
  var id = req.params.id;

  req.db.collection('alunos').update({_id: ObjectID(id)}, { $set: req.body }, function(err, result) {
    if (err) {
      return res.sendStatus(503);
    }

    res.send(result);
  });
};

// remove um aluno utilizando o id
exports.apagar = function (req, res) {
  var id = req.params.id;

  req.db.collection('alunos').remove({_id: ObjectID(id)}, {justOne: true}, function(err, result) {
    if (err) {
      return res.sendStatus(503);
    }

    res.sendStatus(200);
  });
};

// recupera um aluno utilizando o id
exports.recuperar = function (req, res) {
  var id = req.params.id;

  req.db.collection('alunos').findOne({_id: ObjectID(id)}, function(err, result) {
    if (err) {
      return res.sendStatus(503);
    }

    if (!result) {
      return res.send(404);
    }

    res.send(result);
  });
};
