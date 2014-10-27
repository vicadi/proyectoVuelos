var express = require('express');
var app = module.exports = express();
var passport = require('passport');
var crud = require("./crud");
 
app.set('views', __dirname + '/views');


app.route('/')
  .get(function(req, res) {
    
   res.render('cliente', {
      title: 'Cliente',
      pCliente: 'active',
      message: req.flash('message'),
      sesion: req.user
   });
  });

  app.route('/administrador')
  .get(isAdmin,function(req, res) {
   db.user.find().exec(function (error, users) {

     res.render('administrador', {
        title: 'Administrador',
        pAdministrador: 'active',
        users : users,
        message: req.flash('message'),
        sesion: req.user
     });
    });
  });
  
  app.route('/administrador') 
  .post(isAdmin,function(req, res) {
   db.user.find().exec(function (error, users) {

     res.render('administrador', {
        title: 'Administrador',
        pAdministrador: 'active',
        users : users,
        message: req.flash('message'),
        sesion: req.user
     });
    });
  });

//new users
  app.route('/new')
  .post(function(req,res){
    crud.create(req, res, function(err, user, flash){
       if(err){
        res.redirect("/");
       }if(user){
        res.redirect("/users");
       }else{
        res.redirect("/users/administrador");
       }
  });
  });

//edit users
  app.route('/edit')
  .post(function(req,res){
    crud.update(req, res, function(err, user, flash){
       if(err){
        res.redirect("/");
       }if(user){
        res.redirect("/users");
       }else{
        res.redirect("/users/administrador");
       }
  });
  });

  app.route('/*')
  .get(isAuthenticated,function(req, res) {
    
   res.render('cliente', {
      title: 'Cliente',
      pCliente: 'active',
      message: req.flash('message'),
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