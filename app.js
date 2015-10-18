var express = require('express'),
    db = require('./models/index.js'),
    bodyParser = require('body-parser'),
    app = express();

var http = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


// SITE FILES

app.get('/', function (req, res) {
  res.render('index');
});



// ERROR PAGE

app.get('/*', function (req, res) {
  res.render('site/404');
});







http.listen(process.env.PORT || 3000, function(){
  console.log("local hosties");
});

module.exports = app;
