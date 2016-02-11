var express = require('express');
var app = express();

//jade middles
app.set('view engine', 'jade');
app.set('views', 'views');




//routes
app.get('/', function (req, res) {
  console.log("NSJJ Club");
  res.render('index', {});
});

app.get('/schedule', function (req, res) {
  console.log('schedule');
  res.render('schedule', {});
});

app.get('/contact', function (req, res) {
  console.log('contact');
  res.render('contact', {});
}); 

var server = app.listen(3000, function () {
  console.log('server litening on port' , server.address().port);
});