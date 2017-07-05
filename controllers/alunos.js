exports.list = function (req, res) {
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
};

exports.create = function (req, res) {
  console.log(req.body);
  res.send(201, req.body);
};

exports.atualizar = function (req, res) {

};

exports.apagar = function (req, res) {

};

exports.recuperar = function (req, res) {

};
