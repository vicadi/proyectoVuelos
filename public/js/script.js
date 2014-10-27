$(document).ready(function(){
//Menu admin
    $('#administrar #nuevoCliente').show();
    $('#administrar #nuevoCliente').addClass('active');
    $('#menuAdmin li#bNuevoCliente').addClass('active');

    $('#menuAdmin li#bNuevoCliente').click(function( ) {
      $('#administrar .active').hide(function(){
    	$('#administrar .active').removeClass('active');
    	$('#menuAdmin .active').removeClass('active');
      	$( "#administrar #nuevoCliente" ).show( "slow" );
		$('#administrar #nuevoCliente').addClass('active');
    	$('#menuAdmin li#bNuevoCliente').addClass('active');

      });
    });

    $('#menuAdmin li#bEditarCliente').click(function( ) {
      $('#administrar .active').hide(function(){
    	$('#administrar .active').removeClass('active');
    	$('#menuAdmin .active').removeClass('active');
      	$( "#administrar #editarCliente" ).show( "slow" );
		$('#administrar #editarCliente').addClass('active');
    	$('#menuAdmin li#bEditarCliente').addClass('active');

      });
    });

    $('#menuAdmin li#bNuevoVuelo').click(function( ) {
      $('#administrar .active').hide(function(){
    	$('#administrar .active').removeClass('active');
    	$('#menuAdmin .active').removeClass('active');
      	$( "#administrar #nuevoVuelo" ).show( "slow" );
		$('#administrar #nuevoVuelo').addClass('active');
    	$('#menuAdmin li#bNuevoVuelo').addClass('active');

      });
    });

    $('#menuAdmin li#bEditarVuelo').click(function( ) {
      $('#administrar .active').hide(function(){
    	$('#administrar .active').removeClass('active');
    	$('#menuAdmin .active').removeClass('active');
      	$( "#administrar #editarVuelo" ).show( "slow" );
		$('#administrar #editarVuelo').addClass('active');
    	$('#menuAdmin li#bEditarVuelo').addClass('active');

      });
    });
        var socket = io();

            socket.on('userSocketServer', function(user){
            $("#fEditCliente input[name='nickName'] ").val(user.nickName);
            $("#fEditCliente input[name='nombre'] ").val(user.nombre);
            $("#fEditCliente input[name='tipoPago'] ").val(user.tipoPago);
            $("#fEditCliente input[name='documento'] ").val(user.documento);
            });


//recargar formulario
$('#editarCliente #nombreUser').change(function( ) {
            var nombreSocketCliente = $('#editarCliente #nombreUser').val();
            socket.emit('nombreSocketUser', nombreSocketCliente);
            $("#fEditCliente button").prop('disabled', false);
            if(nombreSocketCliente=="vacio"){
              $("#fEditCliente button").prop('disabled', true);
            }
            
  });


});