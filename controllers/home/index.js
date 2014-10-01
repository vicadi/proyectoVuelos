var express = require('express');
var app = module.exports = express();
 
app.set('views', __dirname + '/views');

//get
app.get('/', function(request, response) {
 
  response.render('home', {
    title: 'Home',
    pVuelos: 'active'
  });
 
});