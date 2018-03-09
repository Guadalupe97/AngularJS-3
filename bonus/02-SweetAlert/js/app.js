
var app = angular.module('bonusApp',[ ]);

app.controller('mainCtrl', ['$scope', function($scope){


	$scope.mensaje = "Hola";
	$scope.titulo = "Titulo";	
	$scope.subtitulo = "Subtitulo";
	$scope.borrar = "";


	$scope.mostrar_alerta = function(){
		//swal para llamar sweet alert
		swal($scope.mensaje);
	}


	$scope.mostrar_subtitulo = function(){
	swal($scope.titulo, $scope.subtitulo);
	}

	$scope.mostrar_confirmacion = function(){
	swal({

		title: "Estas seguro",
		text: "Deseas eliminar este archivo",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "Si",
		closeOnConfirm: false,
	},

	function(){

		//funciones con $scope
		$scope.borrar = "Archivo Borrado";
		//para hcer los cambios en angular
		$scope.$apply();
		swal("Eliminado","Tu archivo fue eliminado","success");

		 });
}

		$scope.mostrar_input = function(){

	swal({
  		title: "Escribe!",
  		text: "Escribe algo:",
  		type: "input",
  		showCancelButton: true,
  		closeOnConfirm: false,
  		inputPlaceholder: "Escribe algo"
		}, 	
			function (inputValue) {
  				if (inputValue === false) return false;
  				if (inputValue === "") {
    			swal.showInputError("Necesitas escribir algo!");
    			return false
  				}

  				$scope.borrar = inputValue;
  				$scope.$apply();
  				swal("Bien!", "Escribiste: " + inputValue, "success");
		});
		}

}]);
