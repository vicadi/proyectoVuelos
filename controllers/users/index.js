var express = require('express');
var app = module.exports = express();
 
app.set('views', __dirname + '/views');


app.route('/cliente')
  .get(function(req, res) {
    
   res.render('cliente', {
      title: 'Cliente',
      pCliente: 'active',
      message: req.flash('message'),
      sesion: req.user
   });
  });
