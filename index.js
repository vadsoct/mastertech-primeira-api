var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello Mastertech!');
});

app.get('/alunos', function (req, res) {
  var body = [ {name:'Fulano'} ];
  res.send(body);
});

app.post('/alunos', function (req, res) {
  console.log(req.body);
  res.sendStatus(201);
});

app.listen(3000);
