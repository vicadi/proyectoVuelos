module.exports = function(mongoose){
var Schema = mongoose.Schema;
var vueloSchema = new Schema({
	aerolinea : String,
	origen : String,
    destino : String,
    numeroPasajeros : Number,
    fechaVuelo : String,
    costoPasaje : Number,
});

return mongoose.model('vuelo',vueloSchema);
}