var express = require('express');
var app = module.exports = express();
 
app.set('views', __dirname + '/views');

//get
app.get('/cliente', function(request, response) {
    
   response.render('cliente', {
    title: 'Cliente',
    pCliente: 'active',
    sesion: request.session.cliente
  });
 
});

app.post('/cliente', function(request, response) {
 
  var formulario = request.body;
 
  var newCliente= new db.cliente({
    nombre : formulario.nombre,
	  documento : formulario.documento,
    tipoPago : formulario.tipoPago,
    vuelo : formulario.vuelo,
    contrasena : formulario.contrasena,
    nickName : formulario.nickName
  });

 
  newCliente.save(function(error, cliente) {
    
    if (error) response.json(error);
    response.redirect('/cliente');
 
  });
  
});
