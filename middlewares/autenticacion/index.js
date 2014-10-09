var express = require('express');
var app = module.exports = express();

app.get('/logout', function (req, res) {
    req.session.destroy(function () {
        res.redirect('/');
    });
});

app.post('/login', function(req, res) {
	authenticate(req.body.nickName, req.body.contrasena, function (err, cliente) {
        if (cliente) {
        	    req.session.cliente = cliente;
                res.redirect('/cliente');
        } else {
                req.session.err=err;
                res.redirect('/');
        }
    });
	});


function authenticate(nickName, contrasena, fn) {
    db.cliente.findOne({nickName: nickName},

    function (err, cliente) {
        if (cliente) {
            if (err) return fn(new Error('Usuario no encontrado'));
            else{
            	if(cliente.contrasena==contrasena){
            		return fn(null, cliente);
            	}else
            		return fn(new Error('Contraseña invalida'));
            	}
        } else {
            return fn(new Error('Usuario no encontrado'));
        }
    })}