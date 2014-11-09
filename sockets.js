module.exports = function(io) {
    
    io.on('connection', function (socket) {
        socket.on('nombreSocketUser', function(nickName){
             db.user.findOne({nickName: nickName}, function (err, user) {
                io.emit('userSocketServer', user);
        	});
        });
        socket.on('nombreSocketVuelo', function(nVuelo){
             db.vuelo.findOne({nVuelo: nVuelo}, function (err, vuelo) {
                io.emit('VueloSocketServer', vuelo);
        	});
        });
        socket.on('atributoBuscarSocketVuelo', function(buscar){
              db.vuelo.find().distinct(buscar, function (error, vuelos) {
                io.emit('ArrayVueloSocketServer', vuelos);
            });
        });
        socket.on('buscarSocketVuelo', function(parametrosBusqueda){
            db.vuelo.find(parametrosBusqueda).lean().exec(function (error, vuelos) {
            io.emit('buscarVueloSocketServer', vuelos);
            });
        });
        socket.on('detallesVuelosSocket', function(nVuelo){
             db.vuelo.findOne({nVuelo: nVuelo}, function (err, vuelo) {
                io.emit('detallesVuelosSocket', vuelo);
            });
        });
    });
};
