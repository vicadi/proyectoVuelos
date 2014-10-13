var express = require('express');
var app = module.exports = express();
var passport = require('passport');

app.set('views', __dirname + '/views');
 //render de home
 app.route('/')

 .get(function(req, res) {
 
 db.user.find().exec(function (error, users) {

  res.render('home', {
    title: 'Home',
    pVuelos: 'active',
    users: users,
    message: req.flash('message'),
    sesion: req.user
  });
 
  });
      });

app.route('/login')

 	.post(passport.authenticate('local-login', {
			successRedirect : '/', 
			failureRedirect : '/users/cliente', 
			failureFlash : true 
		}));

 app.route('/signup')

  .post(passport.authenticate('local-signup', {
      successRedirect : '/', // redirect to the secure profile section
      failureRedirect : '/users/cliente', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
    }));

app.route('/logout')

  .get(function(req, res) {
    req.logout();
    res.redirect('/');
  });