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

  app.route('/administrador/:estadoAdmin')
  .get(isAdmin,function(req, res) {
    req.session.estadoAdmin = req.params.estadoAdmin;
    res.redirect("/users/administrador");
  });

  app.route('/administrador')
  .get(isAdmin,function(req, res) {
    crud.read(req, res, function(err, users, vuelos, flash){
     res.render('administrador', {
        title: 'Administrador',
        pAdministrador: 'active',
        estado : req.session.estadoAdmin,
        users : users,
        vuelos : vuelos,
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
        req.session.estadoAdmin="newCliente";
        res.redirect("/users/administrador");
       }
  });
  });

//edit users
  app.route('/edit')
  .post(isAuthenticated, function(req,res){
    crud.update(req, res, function(err, user, flash){
      if(err){
        res.redirect("/");
       }if(user){
        res.redirect("/users");
       }else{
        req.session.estadoAdmin="editCliente";
        res.redirect("/users/administrador");
       }
  });
  });

  //delete users  
  app.route('/delete/:nickName')
  .get(isAuthenticated, function(req,res){
    crud.deleteUser(req, res, function(err, flash){
       if(err){
        res.redirect("/");
       }if(req.user)
       if(req.user.nickName=="admin"){
        req.session.estadoAdmin="editCliente";
        res.redirect("/users/administrador");
       }else{
        res.redirect('/');
       }
  });
  });

  app.route('/*')
  .get(isAuthenticated, function(req, res) {
    
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