var express = require('express');
var app = module.exports = express();
 
app.set('views', __dirname + '/views');

//get
app.get('/reservar', function(request, response) {
 
  response.render('reservar', {
    title: 'Reservas',
    pReservar: 'active'
  });
 
});