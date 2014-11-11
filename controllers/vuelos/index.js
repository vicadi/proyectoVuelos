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

//guardar vuelo user
app.route('/guardarVuelo')
  .post(isAuthenticated, function(req,res){
   var date=new Date();
   var id=""+date.getYear()+date.getMonth()+date.getDay()+date.getHours()+date.getMinutes()+date.getSeconds();
    db.user.findOneAndUpdate({nickName:req.user.nickName},
      {$push:{vuelos:{recervacionId:id,vuelo:req.body.vuelos,numero:req.body.numero,inf:req.body.vuelosOyD}}},
      function(error, user){
      if(error){
        req.flash('message', 'Error a guardar vuelo.');
        res.redirect("/");
      }else{
        req.flash('message', 'Vuelo registrado exitosamente.');
        res.redirect("/");
      }
    });
  });

app.route('/borrarVueloCliente')
  .post(isAuthenticated, function(req,res){
    var vuelo=req.body.vuelo;
    db.user.findOneAndUpdate({nickName:req.user.nickName},
      {$pull:{vuelos:{vuelo:vuelo}}},
      function(error, user){
      if(error){
        req.flash('message', 'Error al eliminar vuelo.');
        res.redirect("/");
      }else{
        req.flash('message', 'Vuelo borrado exitosamente.');
        res.redirect("/");
      }
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
function isAuthenticated(req, res, next) {

    if (req.user){
        return next();
    }

     req.flash('message', 'No estas autenticado.');
     res.redirect('/users');
}