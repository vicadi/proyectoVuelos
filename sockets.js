module.exports = function(io) {
    
    io.on('connection', function (socket) {
        socket.on('nombreSocketUser', function(nickName){
             db.user.findOne({nickName: nickName},
             	function (err, user) {
            io.emit('userSocketServer', user);
        	});
        });
        socket.on('nombreSocketVuelo', function(nVuelo){
             db.vuelo.findOne({nVuelo: nVuelo},
             	function (err, vuelo) {
            io.emit('VueloSocketServer', vuelo);
        	});
        });
    });
};
