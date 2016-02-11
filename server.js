var express = require('express');
var app = express();

//jade middles
app.set('view engine', 'jade');
app.set('views', 'views');

app.get('/', function (req, res) {
  console.log("NSJJ Club");
  res.render('index', {});
});

var server = app.listen(3000, function () {
  console.log('server litening on port' , server.address().port);
});