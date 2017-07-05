var alunosController = require("./controllers/alunos.js");

var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();

app.use(bodyParser.json());

var db;
var url = 'mongodb://localhost:27017/primeira-api';

MongoClient.connect(url, function (err, database) {
  if (err) return console.log(err);
  db = database;
  app.listen(3000, function() {
    console.log('listening on 3000');
  });
});

app.get('/', function (req, res) {
  res.status(200).send("Hello Mastertech!");
});

app.get('/alunos', alunosController.list);

app.post('/alunos', function (req, res) {
  console.log(req.body);
  res.send(201, req.body);
});

app.put('/alunos', function (req, res) {
  console.log(req.body);
  var a = req.body;
  a.idade = 10;

  res.send(200, a);
});
