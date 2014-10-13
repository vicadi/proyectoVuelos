var express = require('express');
var app = module.exports = express();
 
app.set('views', __dirname + '/views');


app.route('/cancelar')
  .get(function(req, res) {
 
   res.render('cancelar', {
   	title: 'Cancelar',
    pCancelar: 'active',
    sesion: req.user
   });
  });

app.route('/reservar')
  .get(function(req, res) {
 
   res.render('reservar', {
    title: 'Reservas',
    pReservar: 'active',
    sesion: req.user
   });
  });