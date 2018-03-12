var app = angular.module('facturacionApp.clientesCrtl', []);

// ================================================
//   Controlador de clientes
// ================================================
app.controller('clientesCtrl', ['$scope','$routeParams', 'Clientes', function($scope, $routeParams, Clientes){
	
	var pag = $routeParams.pag;


	$scope.activar('mClientes','','Clientes','listado');
	$scope.clientes = {};
	$scope.clienteSel = {};


	$scope.moverA = function( pag ){

		Clientes.cargarPagina( pag ).then( function(){
			$scope.clientes = Clientes;
		});

	};


	$scope.moverA(pag);



	$scope.mostrarModal = function(cliente, frmCliente){

		angular.copy(cliente, $scope.clienteSel);

		$("#modal_cliente").modal();
	}

	//Funcion para guardar

	$scope.guardar = function(cliente){

		Clientes.guardar(cliente).then(function(){

			//codigo cuando se actualice
			$("#modal_cliente").modal('hide');

			//el formulario vuelve a su estado original
			//frmCliente.autoValidateFormOptions.resetForm();
			

		});

	}




}]);	