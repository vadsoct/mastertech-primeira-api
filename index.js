var express = require('express');
var bodyParser = require('body-parser');

// inicializa o express
var app = express();

// inicializa o body parser
app.use(bodyParser.json());

// inicializa o servidor na porta especificada
app.listen(3000, function() {
  console.log('Acesse o servidor http://localhost:3000');
});

// importa controllers
var alunosController = require('./controllers/alunos.js');
var professoresController = require('./controllers/professores.js');

// cria enpoints para funcoes de controllers
app.get('/alunos', alunosController.listar);
app.post('/alunos', alunosController.criar);
app.put('/alunos/:id', alunosController.atualizar);
app.get('/alunos/:id', alunosController.recuperar);
app.delete('/alunos/:id', alunosController.apagar);

app.get('/professores', professoresController.listar);
app.post('/professores', professoresController.criar);
