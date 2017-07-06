var ObjectID = require('mongodb').ObjectID;

// lista professores
exports.listar = function (req, res) {
  req.db.collection('professores').find().toArray(function(err, result) {
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
    req.db.collection('professores').save(professor, function(err, result) {
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
