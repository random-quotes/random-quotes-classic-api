var express = require('express');

var app = express.createServer(express.logger());

var data = require('fs').readFileSync(__dirname + '/quotes.json', 'utf8');
var quotes = JSON.parse(data);

app.get('/', function(req, res) {
  var random = Math.floor(Math.random() * quotes.length);
  res.json(quotes[random]);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
