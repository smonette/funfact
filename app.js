var express = require('express'),
    db = require('./models/index.js'),
    bodyParser = require('body-parser'),
    app = express();

var http = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}) );



// SITE FILES

app.get('/', function (req, res) {
  res.render('index');
});


// Submit the fact

app.post('/create', function(req,res){
  // have to call my create new user functions
  db.fact.createNewFact(req.body.fact, req.body.citation,
    function(err){
      res.render("index", { message: "NOO" });
    },
    function(success){
      res.render('index', {message: "Success! "});
    });

});





http.listen(process.env.PORT || 3000, function(){
  console.log("local hosties");
});

module.exports = app;
