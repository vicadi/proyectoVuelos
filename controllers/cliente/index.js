var express = require('express');
var app = module.exports = express();
 
app.set('views', __dirname + '/views');

//get
app.get('/cliente/new', function(request, response) {
 
  response.render('new');
 
});

app.post('/cliente', function(request, response) {
 
  var u = request.body;
 
  var newCliente= new db.cliente({
    nombre : u.nombre,
	  documento : u.documento,
    tipoPago : u.tipoPago,
    vuelo : u.vuelo
  });

 
  newCliente.save(function(error, cliente) {
    
    if (error) response.json(error);
    response.redirect('/cliente');
 
  });
  
});
