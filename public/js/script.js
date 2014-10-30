$(document).ready(function(){

    $('#menuAdminUser li#bEditarMisVuelos').click(function( ) {
      $('#administrarUser .active').hide(function(){
      $('#administrarUser .active').removeClass('active');
      $('#menuAdminUser .active').removeClass('active');
      $("#administrarUser #editarMisVuelos").show( "slow" );
      $('#administrarUser #editarMisVuelos').addClass('active');
      $('#menuAdminUser li#bEditarMisVuelos').addClass('active');

      });
    });

    $('#menuAdminUser li#bEditarMiPerfil').click(function( ) {
      $('#administrarUser .active').hide(function(){
      $('#administrarUser .active').removeClass('active');
      $('#menuAdminUser .active').removeClass('active');
      $("#administrarUser #editarMiPerfil").show( "slow" );
      $('#administrarUser #editarMiPerfil').addClass('active');
      $('#menuAdminUser li#bEditarMiPerfil').addClass('active');

      });
    });


//Menu admin
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
        if($('#administrar #estado').val()==""||$('#administrar #estado').val()=="newCliente"){
            $('#administrar #nuevoCliente').show();
            $('#administrar #nuevoCliente').addClass('active');
            $('#menuAdmin li#bNuevoCliente').addClass('active');
        }
        if($('#administrar #estado').val()=="editCliente"){
            $( "#administrar #editarCliente" ).show();
            $('#administrar #editarCliente').addClass('active');
            $('#menuAdmin li#bEditarCliente').addClass('active');
        }
         if($('#administrar #estado').val()=="newVuelo"){
            $( "#administrar #nuevoVuelo" ).show();
            $('#administrar #nuevoVuelo').addClass('active');
            $('#menuAdmin li#bNuevoVuelo').addClass('active');
        }
         if($('#administrar #estado').val()=="editVuelo"){
            $( "#administrar #editarVuelo" ).show();
            $('#administrar #editarVuelo').addClass('active');
            $('#menuAdmin li#bEditarVuelo').addClass('active');
        }

//recibe info del socket y cambia los valores de los input
        var socket = io();

            socket.on('userSocketServer', function(user){
            $("#fEditCliente input[name='nickName'] ").val(user.nickName);
            $("#fEditCliente input[name='nickNameOriginal']").val(user.nickName);
            $("#fEditCliente input[name='nombre'] ").val(user.nombre);
            $("#fEditCliente input[name='tipoPago'] ").val(user.tipoPago);
            $("#fEditCliente input[name='documento'] ").val(user.documento);
            });

            socket.on('VueloSocketServer', function(vuelo){
            $("#fEditVuelo input[name='nVuelo'] ").val(vuelo.nVuelo);
            $("#fEditVuelo input[name='nVueloOriginal'] ").val(vuelo.nVuelo);
            });


//envia info al socket 
$('#editarCliente #nombreUser').change(function( ) {

    var nombreSocketCliente = $('#editarCliente #nombreUser').val();
     socket.emit('nombreSocketUser', nombreSocketCliente);
     $("#fEditCliente button").prop('disabled', false);
     $("button#eliminarUser").prop('disabled', false);
    if(nombreSocketCliente=="vacio"){
        $("#fEditCliente button").prop('disabled', true);
        $("button#eliminarUser").prop('disabled', true);
        $("#fEditCliente input[name='nickName'] ").val("");
        $("#fEditCliente input[name='nickNameOriginal']").val("");
        $("#fEditCliente input[name='nombre'] ").val("");
        $("#fEditCliente input[name='tipoPago'] ").val("");
        $("#fEditCliente input[name='documento'] ").val("");
      }

     if(nombreSocketCliente=="admin"){
       $("button#eliminarUser").prop('disabled', true);
       $("#fEditCliente input[name='nickName'] ").prop('disabled', true);
       $("#fEditCliente input[name='nombre'] ").prop('disabled', true);
       $("#fEditCliente input[name='tipoPago'] ").prop('disabled', true);
       $("#fEditCliente input[name='documento'] ").prop('disabled', true);
     }else{
       $("button#eliminarUser").prop('disabled', false);
       $("#fEditCliente input[name='nickName'] ").prop('disabled', false);
       $("#fEditCliente input[name='nombre'] ").prop('disabled', false);
       $("#fEditCliente input[name='tipoPago'] ").prop('disabled', false);
       $("#fEditCliente input[name='documento'] ").prop('disabled', false);
     }     
  });

$('#editarVuelo #nombreVuelo').change(function( ) {
    var nombreSocketVuelo = $('#editarVuelo #nombreVuelo').val();
     socket.emit('nombreSocketVuelo', nombreSocketVuelo);
     $("#fEditVuelo button").prop('disabled', false);
     $("button#eliminarVuelo").prop('disabled', false);
    if(nombreSocketVuelo=="vacio"){
        $("#fEditVuelo button").prop('disabled', true);
        $("button#eliminarVuelo").prop('disabled', true);
        $("#fEditVuelo input[name='nVueloOriginal']").val("");
        $("#fEditVuelo input[name='nVuelo'] ").val("");
    }
});

});

function eliminarUser(){
    if(confirm("¿Seguro que quieres eliminar a "+$("#fEditCliente input[name='nickNameOriginal']").val()+"?")) {
        document.location.href= "/users/delete/"+$("#fEditCliente input[name='nickNameOriginal']").val();
}
}
function eliminarMiPerfil(){
    if(confirm("¿Seguro que quieres eliminar tu perfil?")){
        document.location.href= "/users/delete/MiPerfil";
    } 
}
function eliminarVuelo(){
    if(confirm("¿Seguro que quieres eliminar el vuelo"+$("#fEditVuelo input[name='nVueloOriginal']").val()+"?")){
        document.location.href= "/vuelos/delete/"+$("#fEditVuelo input[name='nVueloOriginal']").val();
    } 
}