var list = function (req, res) {
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
exports.list = list;
