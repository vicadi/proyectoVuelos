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

//recargar formulario
$('#editarCliente #sClientes').change(function( ) {
       $('#editarCliente #fClientes').submit();
  });
});

