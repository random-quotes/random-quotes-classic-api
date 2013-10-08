var express = require('express');
var quotes = require('./quotes.json');

var app = express();

app.use(express.logger());

app.get('/', function(req, res) {
  var random = Math.floor(Math.random() * quotes.length);
  res.header('Access-Control-Allow-Origin', '*');
  res.json(quotes[random]);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
