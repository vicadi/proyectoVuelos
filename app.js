var express = require('express');
var app = express();

//modulos
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var passport = require('passport');
var flash    = require('connect-flash');
var bodyParser   = require('body-parser');

//models
var models = require('./models');

//controllers
var users= require('./controllers/users');
var vuelos = require('./controllers/vuelos');
var rutas= require('./controllers/routes');


// simula DELETE y PUT
app.use(methodOverride());

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

//path del directorio public
app.use(express.static(path.join(__dirname, 'public')));

//Sesiones y cokies
 app.use(cookieParser());
 app.use(session({secret: '1234567'}));

 //passport
 require('./config/passport')(passport); // pass passport for configuration
 app.use(passport.initialize());
 app.use(passport.session()); // persistent login sessions
 app.use(flash());



//get
app.use("/users",users);
app.use("/vuelos",vuelos);
app.use(rutas);


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