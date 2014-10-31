var express = require('express');
var app = module.exports = express();
var crud = require("./crud");
 
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

//solo admin
app.route('/new')
  .post(isAdmin, function(req,res){
    crud.create(req, res, function(err, flash){
       if(err){
        res.redirect("/users/administrador");
       }else{
        req.session.estadoAdmin="newVuelo";
        res.redirect("/users/administrador");
       }
    });
  });

//edit users
app.route('/edit')
  .post(isAdmin, function(req,res){
    crud.update(req, res, function(err, vuelo, flash){
      if(err){
        res.redirect("/");
       }else{
        req.session.estadoAdmin="editVuelo";
        res.redirect("/users/administrador");
       }
  });
  });

  app.route('/delete/:nVuelo')
  .get(isAdmin, function(req,res){
    crud.deleteVuelo(req, res, function(err, flash){
       if(err){
        res.redirect("/");
       }else{
        req.session.estadoAdmin="editVuelo";
        res.redirect("/users/administrador");
       }
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


function isAdmin(req, res, next) {
  if(req.user){
      if (req.user.nickName=="admin"){
          return next();
      }
  }

     req.flash('message', 'No eres administrador.');
     res.redirect('/');
}