var express = require('express');
var bodyParser = require('body-parser');
var expressMongoDb = require('express-mongo-db');

var basicAuth = require('basic-auth');

// inicializa o express
var app = express();

// inicializa o body parser
app.use(bodyParser.json());

// inicializa mongo e expoe para o express
app.use(expressMongoDb('mongodb://localhost:27017/primeira-api'));

// inicializa o servidor na porta especificada
app.listen(3000, function() {
  console.log('Acesse o servidor http://localhost:3000');
});

var auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  };

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  if (user.name === 'foo' && user.pass === 'bar') {
    return next();
  } else {
    return unauthorized(res);
  };
};

// importa controllers
var alunosController = require('./controllers/alunos.js');
var professoresController = require('./controllers/professores.js');

// cria enpoints para funcoes de controllers
app.get('/alunos', auth, alunosController.listar);
app.post('/alunos', alunosController.criar);
app.put('/alunos/:id', alunosController.atualizar);
app.get('/alunos/:id', alunosController.recuperar);
app.delete('/alunos/:id', alunosController.apagar);

app.get('/professores', professoresController.listar);
app.post('/professores', professoresController.criar);
