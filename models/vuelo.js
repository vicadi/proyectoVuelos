var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Schema = require('mongoose').Schema;
var vueloSchema = new Schema({
	aerolinea : String,
	origen : String,
    destino : String,
    numeroPasajeros : Number,
    fechaVuelo : String,
    costoPasaje : Number,
});

var vuelo = mongoose.model('vuelo',vueloSchema);

module.exports = vuelo;
