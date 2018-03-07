//Encapsulamiento de funciones 

(function(){

	var app = angular.module('uniApp', []);

	app.controller('listadoCtrl', ['$scope', function ($scope) {
	

		$scope.listado = ["Fernando Herrera" , "Melissa Flores", "Juan Carlos Pineda"];

		$scope.listadoProfesores ={
			profesores: [{
				nombre: "Fernando Herrera", 
				edad: 29,
				materia: "PEE"
			},
			{
				nombre: "Melissa Flores",
				edad: 26,
				materia: "IEC"
		},
		{
				nombre: "Juan Carlos",
				edad: 45,
				materia: "M110"
			}]
		}

	}]);
})();