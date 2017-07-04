var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello Mastertech!');
});

app.get('/alunos', function (req, res) {
  var body = [
    {
      "id": 1,
      "nome":"Alberto",
      "matricula":"CS17047",
      "idade":null
    },
    {
      "id": 2,
      "nome":"Roberto",
      "matricula":"CS17048",
      "idade":null
    }
  ];
  console.log('Get invocado');
  res.send(body);
});

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


app.listen(3000);
