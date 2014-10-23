var express = require('express');
var app = module.exports = express();
 
app.set('views', __dirname + '/views');

app.route('/')

 .get(function(req, res) {
 
 db.user.find().exec(function (error, users) {

  res.render('vuelos', {
    title: 'vuelos',
    pVuelos: 'active',
    users: users,
    message: req.flash('message'),
    sesion: req.user
  });
 
  });
      });

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