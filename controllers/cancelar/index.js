var express = require('express');
var app = module.exports = express();
 
app.set('views', __dirname + '/views');

//get
app.get('/cancelar', function(request, response) {
 
  response.render('cancelar', {
    title: 'Recervas',
    pCancelar: 'active'
  });
 
});