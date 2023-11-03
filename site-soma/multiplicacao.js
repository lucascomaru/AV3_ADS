var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

app.post('/soma', function (req, res) {
    var body = req.body;
    console.log(body);
    var resultado = body.numero1 * body.numero2;
    res.send(`Resultado da soma: ${resultado}`);
});

var port = 3001;

app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});
