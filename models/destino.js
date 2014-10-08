module.exports = function(mongoose){
var Schema = mongoose.Schema;
var destinoSchema = new Schema({
	nombre : String,
	pais : String,
    idioma : String,
});

return mongoose.model('destino',destinoSchema);
}