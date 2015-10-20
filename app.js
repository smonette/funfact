var express = require('express'),
    db = require('./models/index.js'),
    bodyParser = require('body-parser'),
    app = express();

var http = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}) );

var ogs = require('open-graph-scraper');


// var cards = db.fact.findAll({attributes: ['name']})
ogs(
  { url: 'http://en.wikipedia.org/wiki/Dell' }, // Settings object first
  function(er, res) { console.log(er, res); }  // Callback 
);


// SITE FILES

app.get('/', function (req, res) {
  db.fact.findAll()
  .then(function(facts){
    res.render('index', {
      facts: facts, 

      message:''
    })
  })
});


app.post('/create', function(req,res){
  // have to call my create new user functions
  db.fact.createNewFact(req.body.fact, req.body.citation,
    function(err){
      console.log('NOO')
    },
    function(success){
      res.redirect('/');
    }
  );

});



http.listen(process.env.PORT || 4000, function(){
  console.log("local hosties on 4000");
});

module.exports = app;
