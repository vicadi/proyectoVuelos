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
	                    newVuelo.numeroPasajerosDis=req.body.numeroPasajeros;
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
   db.vuelo.find().distinct("aerolinea", function (error, vuelos) {
   		if (error){
            return done(error);          
        }else{
            return done(null, vuelos);
        }
   });
}

module.exports.update = function (req, res, done) {
    var nVuelo=req.body.nVueloOriginal;
    var updateVuelo= {};
        if(req.body.nVuelo)
			updateVuelo.nVuelo = nVuelo;
		if(req.body.aerolinea)
			updateVuelo.aerolinea = req.body.aerolinea;
		if(req.body.origen)
			updateVuelo.origen = req.body.origen;
		if(req.body.destino)
			updateVuelo.destino = req.body.destino;
		if(req.body.numeroPasajeros){
			updateVuelo.numeroPasajeros = req.body.numeroPasajeros;
			updateVuelo.numeroPasajerosDis=req.body.numeroPasajeros;
		}
		if(req.body.fechaVuelo)
			updateVuelo.fechaVuelo = req.body.fechaVuelo;
		if(req.body.horaVuelo)
			updateVuelo.horaVuelo = req.body.horaVuelo;
		if(req.body.precioVuelo)
			updateVuelo.precioVuelo = req.body.precioVuelo;

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