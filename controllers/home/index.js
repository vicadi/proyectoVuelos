var express = require('express');
var app = module.exports = express();
 
app.set('views', __dirname + '/views');

//get
app.get('/', function(request, response) {
 
 db.cliente.find().exec(function (error, clientes) {

  response.render('home', {
    title: 'Home',
    pVuelos: 'active',
    clientes: clientes
  });
 
	});
  		});