var express = require('express');
var app = express();
var path = require('path')
var fs = require('fs');
var bodyParser = require('body-parser');
var uuid = require('node-uuid');

app.set('view engine', 'jade');
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser());

app.get('/newId', function (req, res) {
  console.log("sending new ID");
  res.send(uuid.v4());
});

app.get('/*', function (req, res) {
  res.redirect('/index.html');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  

  console.log('Example app listening at http://%s:%s', host, port);

});
