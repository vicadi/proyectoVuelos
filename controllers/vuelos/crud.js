//solo para admin
module.exports.create = function(req, res, done) {
		if (req.body.nVuelo){
	        var nVuelo = req.body.nVuelo.toUpperCase();; 
	    }
	    process.nextTick(function() {
	        db.vuelo.findOne({ "nVuelo" :  nVuelo }, function(err, vuelo) {
	        	if (err)
	                return done(err);
	            if (vuelo) {
	                return done(new Error("Flight not created"), req.flash('message', 'That flight is already taken.'));
	            } else {
	                var newVuelo= new db.vuelo();
	                    newVuelo.nVuelo = nVuelo;
	                    newVuelo.aerolinea = req.body.aerolinea;
	                    newVuelo.origen = req.body.origen;
	                    newVuelo.destino = req.body.destino;
	                    newVuelo.numeroPasajeros = req.body.numeroPasajeros;
	                    newVuelo.fechaVuelo = req.body.fechaVuelo;
	                    newVuelo.horaVuelo = req.body.horaVuelo;
	                    newVuelo.precioVuelo = req.body.precioVuelo;

	                newVuelo.save(function(error, vuelo) {
	                    if (error){
	                        return done(error);          
	                    }else{
	                        return done(null, req.flash('message', 'new flight created  by admin'));
	                    }
	                });
	            }
	        });
	    });    
}

module.exports.read = function(req, res, done) {

}
module.exports.update = function (req, res, done) {
    var nVuelo=req.body.nVueloOriginal;
    var updateVuelo= {};
        if(req.body.nVuelo)
            updateVuelo.nVuelo = req.body.nVuelo;

    db.vuelo.findOneAndUpdate({ "nVuelo" : nVuelo},{$set:updateVuelo},
        function(error, vuelo){
            if (error)
                return done(error);          
            else
                return done(null, vuelo, req.flash('message', 'Flight edited by admin'));
               
            });
        }

module.exports.deleteVuelo = function (req, res, done) {
    var nVuelo = req.params.nVuelo;

    db.vuelo.findOneAndRemove({ "nVuelo" : nVuelo},
        function(error){
            if (error)
                return done(error);          
            else
                return done(null, req.flash('message', 'Flight delete by admin'));       
           
      }
    );
  }