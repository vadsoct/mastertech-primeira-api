var ObjectID = require('mongodb').ObjectID;

// cria um novo usuario
exports.criar = function (req, res) {
  var u = req.body;

  // if (!u.usuario || !u.senha) {
  //   return res.sendStatus(400);
  // }
  //
  // if (u.senha.length < 8) {
  //   return res.status(400).send("comprimento invalido de senha");
  // }
  //
  // if (!verificaPadraoSenha(u.senha)) {
  //   return res.status(400).send("padrao senha invalido");
  // }
  if (!verificaSenha(res, u, 8)) {
    return;
  }

  // definir que eh externo
  u.papel='externo';

  req.db.collection('usuarios').save(u, function(err, result) {
    if (err) {
      return res.sendStatus(503);
    }

    res.sendStatus(201);
  });
};

// cria um usuario professor
exports.criarUsuarioProfessor = function (req, res) {
  var u = req.body;
  var idProfessor = req.params.idProfessor;

  if (!verificaSenha(res, u, 10)) {
    return;
  }

  // definir que eh prof
  u.papel='professor';
  u.idProfessor = ObjectID(idProfessor); // TODO: voltar aqui

  req.db.collection('usuarios').save(u, function(err, result) {
    if (err) {
      return res.sendStatus(503);
    }

    res.sendStatus(201);
  });

};

function verificaSenha(res, u, minLength) {
  if (!u.usuario || !u.senha) {
    res.sendStatus(400);
    return false;
  }

  if (u.senha.length < minLength) {
    res.status(400).send("senha invalida, verifique o minimo de caracteres=" + minLength);
    return false;
  }

  if (!verificaPadraoSenha(u.senha)) {
    res.status(400).send("padrao senha invalido");
    return false;
  }

  return true;
}

function verificaPadraoSenha(senha) {
  return true;
}
