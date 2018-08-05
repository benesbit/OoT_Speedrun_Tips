/*  Ben Nesbit
 *  CS-290
 *  script.js
 */


var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.use(express.static('public'));

app.get('/',function(req,res){
  res.render('home');
});

app.get('/OoT-speedrunning-overview',function(req,res){
  res.render('OoT-speedrunning-overview');
});

app.get('/OoT-speedrunning-tricks',function(req,res){
  res.render('OoT-speedrunning-tricks');
});

app.get('/OoT-speedrunning-videos',function(req,res){
  res.render('OoT-speedrunning-videos');
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
