var express = require('express');
var app = module.exports = express();

app.post('/login', function(req, res) {
	authenticate(req.body.nickName, req.body.contrasena, function (err, cliente) {
        if (cliente) {
                res.send("Authentication ok");
        } else {
                res.send(err.message);
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