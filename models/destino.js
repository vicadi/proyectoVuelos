var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Schema = required('mongoose').Schema;
var destinoSchema = new Schema({
	nombre : String,
	pais : String,
    idioma : String,
});

var destino = mongoose.model('destino',destinoSchema);
module.exports = destino;