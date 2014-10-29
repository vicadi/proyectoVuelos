var express = require('express');
var app = module.exports = express();
 
app.set('views', __dirname + '/views');

app.route('/')
 .get(function(req, res) {
    res.render('vuelos', {
      title: 'vuelos',
      pVuelos: 'active',
      message: req.flash('message'),
      sesion: req.user
    });
 });

app.route('/new')
 .post(function(req, res) {
 });

app.route('/edit')
 .post(function(req, res) {
 });

app.route('/delete')
 .post(function(req, res) {
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


function isAuthenticated(req, res, next) {
    if (req.user){
        return next();
    }

     req.flash('message', 'No estas autenticado.');
     res.redirect('/');
}

function isAdmin(req, res, next) {
  if(req.user){
      if (req.user.nickName=="admin"){
          return next();
      }
  }

     req.flash('message', 'No eres administrador.');
     res.redirect('/');
}