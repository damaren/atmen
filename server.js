var express = require('express');
var app = express();
var path = require('path')
var fs = require('fs');

app.set('view engine', 'jade');
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.get('/message', function (req, res) {
  res.redirect('/messages.html');
});

app.get('/gallery', function (req, res) {
  res.redirect('/gallery.html');
});

app.get('/about', function (req, res) {
  res.redirect('/about.html');
});

app.get('/*', function (req, res) {
  res.redirect('/index.html');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
