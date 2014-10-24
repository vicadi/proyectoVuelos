module.exports = function(mongoose){
var Schema = mongoose.Schema;
var vueloSchema = new Schema({
	nombre : String,
	aerolinea : String,
	origen : String,
    destino : String,
    numeroPasajeros : Number,
    fechaVuelo : String,
    hora: String,
    costoPasaje : Number,
});

return mongoose.model('vuelo',vueloSchema);
}