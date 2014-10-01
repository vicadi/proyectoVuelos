var express = require('express');
var app = module.exports = express();
 
app.set('views', __dirname + '/views');

//get
app.get('/recervar', function(request, response) {
 
  response.render('recervar', {
    title: 'Recervas',
    pRecervar: 'active'
  });
 
});