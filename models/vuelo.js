module.exports = function(mongoose){
var Schema = mongoose.Schema;
var vueloSchema = new Schema({
	nVuelo : String,
	aerolinea : String,
	origen : String,
    destino : String,
    numeroPasajeros : Number,
    numeroPasajerosDis: Number, 
    fechaVuelo : String,
    horaVuelo: String,
    precioVuelo : Number,
});

return mongoose.model('vuelo',vueloSchema);
}