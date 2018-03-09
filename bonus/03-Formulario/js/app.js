
var app = angular.module('bonusApp',[ ]);

app.controller('mainCtrl', ['$scope', function($scope){

	//para manejar todos los datos de un formulario es preferible crear un objeto
	$scope.formData = {};

	//marcar errores	
	$scope.guardar_datos = function(valido){

		if(!valido){
			return;
		}

		console.log("Posteando...");

		}



	
}]);
