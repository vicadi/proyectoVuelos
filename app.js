var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var models = require('./models');
var cliente = require('./controllers/cliente');

var app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cliente);


//get

app.get('/mockups/login', function(request, response) {

  response.write('<html>');
  response.write('<img src="./vuelos1.png" width="100%" height="100%"> >');
  response.write('</html>');
  response.end (); 
 
});
app.get('/mockups/buscar-vuelo', function(request, response) {
 
  response.write('<html>');
  response.write('<img src="./vuelos2.png" width="100%" height="100%"> >');
  response.write('</html>');
  response.end (); 
 
});
app.get('/mockups/recervar-vuelo', function(request, response) {
 
  response.write('<html>');
  response.write('<img src="./vuelos3.png" width="100%" height="100%"> >');
  response.write('</html>');
  response.end (); 
 
});
app.get('/mockups/cancelar-vuelo', function(request, response) {
 
  response.write('<html>');
  response.write('<img src="./vuelos4.png" width="100%" height="100%"> >');
  response.write('</html>');
  response.end (); 

});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
