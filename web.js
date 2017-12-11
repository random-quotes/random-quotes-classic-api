var express = require('express');
var logger = require('morgan');
var yaml = require('js-yaml');
var fs = require('fs');

var quotes = yaml.load(fs.readFileSync('quotes.yaml'));
var app = express();

app.use(logger('combined'))

app.get('/', function (req, res) {
  var random = Math.floor(Math.random() * quotes.length);
  res.header('Access-Control-Allow-Origin', '*');
  res.json(quotes[random]);
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listening on " + port);
});
