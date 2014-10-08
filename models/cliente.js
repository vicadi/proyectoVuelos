module.exports = function(mongoose){
var Schema = mongoose.Schema;
var clienteSchema = new Schema({
	nombre : String,
	documento : Number,
    tipoPago : String,
    vuelo : String,
    contrasena : String,
    nickName : String
});

return mongoose.model('cliente',clienteSchema);
}
