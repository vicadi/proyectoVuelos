var express = require('express');
var app = module.exports = express();
var passport = require('passport');

app.set('views', __dirname + '/views');
 //render de home
 app.route('/')

 .get(function(req, res) {
      res.redirect('/vuelos');
      });
 
  app.route('/login')

  .post(passport.authenticate('local-login', {
      successRedirect : '/users/cliente', 
      failureRedirect : '/', 
      failureFlash : true 
    }));

app.route('/logout')

  .get(function(req, res) {
    req.logout();
    res.redirect('/');
  });